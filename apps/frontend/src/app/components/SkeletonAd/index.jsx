import React from 'react';

import styles from './SkeletonAd.module.scss';

export const SkeletonAd = () => {
  return (
    <div className={styles.root}>
      <div className={styles.root_img}></div>
    </div>
  );
};
