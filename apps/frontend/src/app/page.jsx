'use client';

import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { AdsList, Route } from './components';

import styles from './index.module.scss';

const fetchAds = async () => {
  // try {
  const { data } = await axios.get('http://localhost:8000/api/ads');

  return data;
  // } catch (err) {
  //   console.error(err);
  //   data = { message: err.message };
  // } finally {
  //   return data;
  // }
};

const Index = () => {
  const [adsList, setAdsList] = useState({});

  useEffect(() => {
    const setAds = async () => {
      const { results } = await fetchAds();
      setAdsList(await results);
    };

    setAds();
  }, []);

  return (
    <div className={styles.container}>
      <Route path="/">
        <AdsList adsList={adsList} />
      </Route>
      <Route path="/ads">
        <AdsList />
      </Route>
    </div>
  );
};

export default Index;
