import { FunctionComponent } from 'react';
import {
  EuiBadge,
  EuiFlexItem,
  EuiPanel,
  EuiText,
  EuiSpacer,
  EuiLink,
} from '@elastic/eui';
import Link from 'next/link';

import LazyLoad from 'react-lazy-load';
import { rulePanelStyles } from './rule_panel.styles';
import moment from 'moment';

import { RuleSummary } from '../../types';

interface RulePanelProps {
  rule: RuleSummary;
}

const RulePanel: FunctionComponent<RulePanelProps> = ({ children, rule }) => {
  const styles = rulePanelStyles();

  return (
    <EuiFlexItem css={styles.item}>
      <EuiPanel>
        <EuiText>
          <Link href={`/rules/${rule.id}`}>
            <EuiLink color="text" onClick={null} css={styles.link}>
              {rule.name}
            </EuiLink>
          </Link>
        </EuiText>
        <LazyLoad>
          <>
            <EuiSpacer size="xs" />
            {rule.tags.map((t, i) => {
              if (t.startsWith('Resources')) {
                return <></>;
              }
              let color = 'hollow';
              let icon = '';
              if (t.startsWith('Domain')) {
                color = 'accent';
                icon = 'globe';
              }
              if (t.startsWith('Use Case')) {
                color = 'primary';
                icon = 'launch';
              }
              if (t.startsWith('Data Source')) {
                color = 'default';
                icon = 'database';
              }
              if (t.startsWith('OS')) {
                color = 'success';
                icon = 'compute';
              }
              if (t.startsWith('Tactic')) {
                color = 'warning';
                icon = 'bug';
              }
              if (t.startsWith('Rule Type')) {
                color = 'hollow';
                icon = 'layers';
              }
              return (
                <EuiBadge
                  iconType={icon}
                  color={color}
                  css={styles.badge}
                  key={i}>
                  {t}
                </EuiBadge>
              );
            })}
            <EuiSpacer size="xs" />
            <EuiText size="xs">
              <p>
                <em>Updated {moment(rule.updated_date).fromNow()}</em>
              </p>
            </EuiText>
          </>
        </LazyLoad>
      </EuiPanel>
    </EuiFlexItem>
  );
};

export default RulePanel;
