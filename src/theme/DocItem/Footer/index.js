import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';

import { useDoc } from '@docusaurus/theme-common/internal';
import LastUpdated from '@theme/LastUpdated';
import TagsListInline from '@theme/TagsListInline';

import styles from './styles.module.css';

function TagsRow({tags}) {
  return (
    <section className={ThemeClassNames.docs.docFooterTagsRow}>
     <TagsListInline tags={tags} />
    </section>
  );
}

function EditMetaRow({lastUpdatedAt, lastUpdatedBy}) {
  return (
    <header className={styles.lastUpdated}>
      <LastUpdated 
        lastUpdatedAt={lastUpdatedAt}
        lastUpdatedBy={lastUpdatedBy}
      />
    </header>
  );
}

export default function DocItemFooter({metadata}) {

  const {
    lastUpdatedAt, 
    formattedLastUpdatedAt,
    lastUpdatedBy,
    tags 
  } = metadata;

  const canDisplayTagsRow = tags.length > 0;
  const canDisplayEditMetaRow = !!(lastUpdatedAt || lastUpdatedBy);
  const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow;

  if (!canDisplayFooter) {
    return null;
  }

  return (
    <footer className={ThemeClassNames.docs.docFooter}>
    
      {canDisplayTagsRow && 
        <TagsRow tags={tags} />
      }

      {canDisplayEditMetaRow &&
        <EditMetaRow
          lastUpdatedAt={lastUpdatedAt}
          lastUpdatedBy={lastUpdatedBy}
        />
      }

    </footer>
  );

}

DocItemFooter.propTypes = {
  metadata: PropTypes.shape({
    lastUpdatedAt: PropTypes.string,
    formattedLastUpdatedAt: PropTypes.string,
    lastUpdatedBy: PropTypes.string,
    tags: PropTypes.array
  }).isRequired
};