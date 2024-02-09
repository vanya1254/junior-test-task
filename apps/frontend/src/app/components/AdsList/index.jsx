import React, { useEffect } from 'react';

import { AdCard } from '../';

import styles from './AdsList.module.scss';

export const AdsList = ({ adsList }) => {
  return (
    <div className={styles.root}>
      <h1 className={styles.root_title}>List of Ads</h1>
      <div className={styles.root__adsContainer}>
        {adsList
          ? adsList.map((ad) => {
              return <AdCard key={ad.id} {...ad} />;
            })
          : []}
      </div>
      <button className={styles.root_filterBtn}>Filters Button</button>
    </div>
  );
};
