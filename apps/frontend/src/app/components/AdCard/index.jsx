import React from 'react';

import styles from './AdCard.module.scss';

export const AdCard = ({}) => {
  return (
    <div className={styles.root}>
      <img src="thumbnail.jpg" alt="Ad Thumbnail" className={styles.root_img} />
      <div className={styles.root__details}>
        <h3 className={styles.root__details_title}>Short Title</h3>
        <button className={styles.root__details_likeBtn}>Like</button>
        <p className={styles.root__details_city}>City</p>
        <p className={styles.root__details_price}>$100</p>
      </div>
    </div>
  );
};
