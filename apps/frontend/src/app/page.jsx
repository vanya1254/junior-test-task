'use client';

// import axios from 'axios';
import React, { useEffect } from 'react';

import { AdsList, Route } from './components';

import styles from './index.module.scss';

// const fetchAds = async () => {
//   const { data } = await axios.get(
//     'http://localhost:8000/api/ads?minPrice=1000000'
//   );

//   return data;
// };

const Index = () => {
  // useEffect(() => {
  //   fetchAds();
  // }, []);

  return (
    <div className={styles.container}>
      <Route path="/">
        <AdsList />
      </Route>
      <Route path="/ads">
        <AdsList />
      </Route>
    </div>
  );
};

export default Index;
