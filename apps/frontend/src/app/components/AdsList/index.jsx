import React from 'react';

import { AdCard } from '../';
import { emptyListForSkeleton } from '../../constants/';

import styles from './AdsList.module.scss';

export const AdsList = ({ adsList = [], isLoading }) => {
  const renderAds = () => {
    return (isLoading ? emptyListForSkeleton : adsList).map((ad) => (
      <AdCard key={ad.id} {...ad} loading={isLoading} />
    ));
  };

  return (
    <div className={styles.root}>
      <div className={styles.root__heading}>
        <h1 className={styles.root__heading_title}>List of Ads</h1>
        <div className={styles.root__heading__filters}>
          <button className={styles.root_filterBtn}>Filters Button</button>
          <button className={styles.root_filterBtn}>Filters Button</button>
          <button className={styles.root_filterBtn}>Filters Button</button>
        </div>
      </div>
      <div className={styles.root__adsContainer}>{renderAds()}</div>
    </div>
  );
};
