import { glob } from 'glob';
import * as toml from 'toml';
import * as fs from 'fs';
import axios from 'axios';

interface RuleSummary {
  id: string;
  name: string;
  tags: Array<string>;
  updated_date: Date;
}

interface TagSummary {
  tag_type: string;
  tag_name: string;
  tag_full: string;
  count: number;
}

function addTagSummary(t: string, tagSummaries: Map<string, TagSummary>) {
  const parts = t.split(': ');
  let s = tagSummaries.get(t);
  if (s == undefined) {
    s = {
      tag_type: parts[0],
      tag_name: parts[1],
      tag_full: t,
      count: 0,
    };
  }
  s.count++;
  tagSummaries.set(t, s);
}

async function getLocalRules(
  ruleSummaries: RuleSummary[],
  tagSummaries: Map<string, TagSummary>
) {
  const ruleFiles = glob.sync('../rules/**/*.toml', {
    ignore: '../rules/_deprecated/**',
  });

  const types = {};

  for (const f of ruleFiles) {
    const ruleContent = toml.parse(fs.readFileSync(f, 'utf8'));
    ruleSummaries.push({
      id: ruleContent.rule.rule_id,
      name: ruleContent.rule.name,
      tags: ruleContent.rule.tags,
      updated_date: new Date(
        ruleContent.metadata.updated_date.replace(/\//g, '-')
      ),
    });
    for (const t of ruleContent.rule.tags) {
      addTagSummary(t, tagSummaries);
    }
    fs.writeFileSync(
      `./src/data/${ruleContent.rule.rule_id}.json`,
      JSON.stringify(ruleContent)
    );
  }
  console.log(`loaded ${ruleFiles.length} rules from local repository`);
}

const integrationsTagMap = new Map<string, string>([
  ['Living off the Land', 'Tactic: Defensive Evasion'],
  ['DGA', 'Tactic: Command and Control'],
  ['Lateral Movement Detection', 'Tactic: Lateral Movement'],
  ['Data Exfiltration', 'Tactic: Exfiltration'],
  ['Host', 'Domain: Endpoint'],
  ['User', 'Domain: User'],
  ['ML', 'Rule Type: Machine Learning'],
]);

async function getIntegrationRules(
  name: string,
  displayName: string,
  ruleSummaries: RuleSummary[],
  tagSummaries: Map<string, TagSummary>
) {
  const githubRulesListUrl = `https://api.github.com/repos/elastic/integrations/contents/packages/${name}/kibana/security_rule`;
  const githubRulesCommitsUrl = `https://api.github.com/repos/elastic/integrations/commits?path=packages%2F${name}%2Fkibana%2Fsecurity_rule&page=1&per_page=1`;

  const rulesCommitsResponse = await axios.get(githubRulesCommitsUrl);
  const updatedDate = new Date(
    rulesCommitsResponse.data[0].commit.committer.date
  );
  const ruleListResponse = await axios.get(githubRulesListUrl);

  for (const r of ruleListResponse.data) {
    const ruleContent = await axios.get(r.download_url);

    const tags = ruleContent.data.attributes.tags
      .filter(x => x != 'Elastic')
      .map(x => {
        if (integrationsTagMap.has(x)) {
          return integrationsTagMap.get(x);
        } else {
          return x;
        }
      });
    tags.push('Use Case: Threat Detection');

    // for now, map the tags to look more like the prebuild rules package
    ruleSummaries.push({
      id: ruleContent.data.id,
      name: ruleContent.data.attributes.name,
      tags: tags,
      updated_date: updatedDate,
    });
    for (const t of tags) {
      addTagSummary(t, tagSummaries);
    }
    const mappedRuleContent = {
      metadata: {
        updated_date: updatedDate,
        source_integration: name,
        source_integration_name: displayName,
      },
      rule: ruleContent.data.attributes,
    };
    mappedRuleContent.rule.tags = tags;
    fs.writeFileSync(
      `./src/data/${ruleContent.data.id}.json`,
      JSON.stringify(mappedRuleContent)
    );
  }
  console.log(
    `loaded ${ruleListResponse.data.length} rules from integration package '${name}'`
  );
}

async function precomputeRuleSummaries() {
  const ruleSummaries: RuleSummary[] = [];

  const tagSummaries = new Map<string, TagSummary>();

  await getLocalRules(ruleSummaries, tagSummaries);
  await getIntegrationRules('dga', 'DGA', ruleSummaries, tagSummaries);
  await getIntegrationRules(
    'ded',
    'Data Exfiltration Detection',
    ruleSummaries,
    tagSummaries
  );
  await getIntegrationRules(
    'lmd',
    'Lateral Movement Detection',
    ruleSummaries,
    tagSummaries
  );
  await getIntegrationRules(
    'problemchild',
    'Living off the Land Attack Detection',
    ruleSummaries,
    tagSummaries
  );

  console.log(`loaded ${ruleSummaries.length} rules`);
  console.log(`example rule:`);
  console.log(ruleSummaries[0]);
  console.log(`found ${tagSummaries.size} tags`);
  console.log(`example tag:`);
  console.log(tagSummaries.get('Data Source: APM'));

  const newestRules = ruleSummaries.sort(
    (a, b) => b.updated_date.getTime() - a.updated_date.getTime()
  );
  console.log(
    `Parsed ${newestRules.length} rules. Newest rule is '${newestRules[0].name}', updated '${newestRules[0].updated_date}'.`
  );

  fs.writeFileSync('./src/data/newestRules.json', JSON.stringify(newestRules));

  const popularTags = Array.from(tagSummaries.values()).sort(
    (a, b) => b.count - a.count
  );
  console.log(
    `Parsed ${popularTags.length} tags. Most popular tag is '${popularTags[0].tag_full}' with '${popularTags[0].count}' rules.`
  );

  fs.writeFileSync('./src/data/tagSummaries.json', JSON.stringify(popularTags));
}

(async () => {
  await precomputeRuleSummaries();
})();
