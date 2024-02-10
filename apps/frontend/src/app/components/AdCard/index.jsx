import React from 'react';

import { SkeletonAd } from '../';

import styles from './AdCard.module.scss';

export const AdCard = ({ id, title, city_name, price, images, loading }) => {
  return loading ? (
    <SkeletonAd />
  ) : (
    <div className={styles.root}>
      <div className={styles.root__img}>
        <img
          src={images[0].image}
          alt="Ad Thumbnail"
          className={styles.root_img}
        />
      </div>
      <div className={styles.root__details}>
        <a href={`/ads/${id}`}>
          <h3 className={styles.root__details_title}>{title}</h3>
        </a>
        <button className={styles.root__details_likeBtn}>Like</button>
        <p className={styles.root__details_city}>{city_name}</p>
        <p className={styles.root__details_price}>{price}бат</p>
      </div>
    </div>
  );
};
