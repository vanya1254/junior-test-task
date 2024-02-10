'use client';

import React, { useState } from 'react';

import { Loading } from '../';

import isEmpty from '../../utils/isEmpty';

import styles from './AdDetails.module.scss';

export const AdDetails = ({ ad }) => {
  const [curImgId, setCurImgId] = useState(0);

  const onClickNext = () => {
    if (curImgId + 1 <= ad.images.length - 1) {
      setCurImgId((prev) => prev + 1);
    } else {
      setCurImgId(0);
    }
  };
  const onClickPrev = () => {
    if (curImgId - 1 >= 0) {
      setCurImgId((prev) => prev - 1);
    } else {
      const id = ad.images.length - 1;
      setCurImgId(id);
    }
  };

  return !isEmpty(ad) ? (
    <div className={styles.root}>
      <div className={styles.root__carousel}>
        <div
          onClick={onClickPrev}
          className={styles.root__carousel_prev}
        >{`<`}</div>
        <img src={ad.images[curImgId].image} alt={`img ${ad.title}`} />
        <div
          onClick={onClickNext}
          className={styles.root__carousel_next}
        >{`>`}</div>
      </div>

      <div className={styles.root__adInfo}>
        <div>
          <div className={styles.root__adInfo_title}>{ad.title}</div>
          <div></div>
          <button className={styles.root__adInfo_likeBtn}>Like</button>
        </div>

        <div className={styles.root__adInfo_location}>
          <span>{ad.city_name}</span>, <span>{ad.district_name}</span>
          <div></div>
          <span className={styles.root__adInfo_price}>{ad.price}бат</span>
        </div>

        <div
          className={styles.root__adInfo_description}
          dangerouslySetInnerHTML={{ __html: ad.description }}
        />
      </div>
    </div>
  ) : (
    <Loading />
  );
};
