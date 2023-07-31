import { FunctionComponent } from 'react';
import {
  EuiBadge,
  EuiFlexGrid,
  EuiFlexItem,
  EuiText,
  EuiIcon,
} from '@elastic/eui';
import { ruleFilterStyles } from './rule_filter.styles';
import { TagSummary } from '../../types';

interface RuleFilterProps {
  tagList: TagSummary[];
  tagFilter: string[];
  displayName: string;
  icon: string;
  onTagChange: (add: string[], remove: string[]) => void;
}

const RuleFilter: FunctionComponent<RuleFilterProps> = ({
  children,
  tagList,
  tagFilter,
  displayName,
  icon,
  onTagChange,
}) => {
  const styles = ruleFilterStyles();

  return (
    <>
      <EuiText size="m">
        <p>
          <EuiIcon size="m" type={icon} css={styles.aligned} />
          <span css={styles.aligned}>{displayName}</span>
        </p>
      </EuiText>
      <EuiFlexGrid gutterSize="s" responsive={false} css={styles.grid}>
        {tagList.map((t, i) => {
          const isTagged = tagFilter.filter(x => x == t.tag_full).length > 0;
          return (
            <EuiFlexItem key={i}>
              <EuiBadge
                color={isTagged ? 'success' : 'hollow'}
                onClick={() => {
                  console.log(`${t.tag_full} ${isTagged}`);
                  if (isTagged) {
                    onTagChange([], [t.tag_full]);
                  } else {
                    onTagChange([t.tag_full], []);
                  }
                }}
                onClickAriaLabel={`Toggle tag for ${t.tag_full}`}>
                {t.tag_name} ({t.count})
              </EuiBadge>
            </EuiFlexItem>
          );
        })}
      </EuiFlexGrid>
    </>
  );
};

export default RuleFilter;
