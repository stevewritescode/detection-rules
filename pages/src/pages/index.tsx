import { FunctionComponent, useState, useMemo } from 'react';
import Head from 'next/head';
import HomeHero from '../components/home/home_hero';
import Wrapper from '../components/home/wrapper';
import RuleList from '../components/home/rule_list';

import newestRules from '../data/newestRules.json';

const Index: FunctionComponent = () => {
  const [searchFilter, setSearchFilter] = useState('');
  const [tagFilter, setTagFilter] = useState([]);

  const rules = useMemo(() => {
    console.log('usememo');
    const start = Date.now();
    const newRules = newestRules.filter(function (r) {
      if (
        searchFilter &&
        !r.name.toLowerCase().includes(searchFilter.toLowerCase())
      ) {
        return false;
      }
      if (tagFilter.length > 0) {
        if (r.tags.filter(t => tagFilter.includes(t)).length == 0) {
          return false;
        }
      }
      return true;
    });
    console.log('end');
    const end = Date.now();
    console.log(`Execution time: ${end - start} ms`);
    return newRules;
  }, [searchFilter, tagFilter]);

  const updateTagFilter = function (
    tagsToAdd: string[],
    tagsToRemove: string[]
  ) {
    console.log(tagFilter);
    console.log(tagsToAdd);
    console.log(tagsToRemove);
    setTagFilter(
      tagFilter.filter(x => !tagsToRemove.includes(x)).concat(tagsToAdd)
    );
  };

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Wrapper>
        <HomeHero
          rules={rules}
          searchFilter={searchFilter}
          tagFilter={tagFilter}
          onSearchChange={setSearchFilter}
          onTagChange={updateTagFilter}
        />
        <RuleList rules={rules} />
      </Wrapper>
    </>
  );
};

export default Index;
