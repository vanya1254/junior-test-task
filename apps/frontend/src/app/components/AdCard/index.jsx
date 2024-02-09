import React from 'react';

import styles from './AdCard.module.scss';

export const AdCard = ({ title, city_name, price, images }) => {
  return (
    <div className={styles.root}>
      <img
        src={images[0].image}
        alt="Ad Thumbnail"
        className={styles.root_img}
      />
      <div className={styles.root__details}>
        <h3 className={styles.root__details_title}>{title}</h3>
        <button className={styles.root__details_likeBtn}>Like</button>
        <p className={styles.root__details_city}>{city_name}</p>
        <p className={styles.root__details_price}>{price}$</p>
      </div>
    </div>
  );
};
