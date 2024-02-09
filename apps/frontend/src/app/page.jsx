'use client';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AdsList, Route, Header } from './components';

import styles from './index.module.scss';

const fetchAds = async () => {
  try {
    const { data } = await axios.get('http://localhost:8000/api/ads');
    const { results } = data;
    return results;
  } catch (err) {
    toast.error(err.message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      transition: Bounce,
    });
  }
};

const Index = () => {
  const [adsList, setAdsList] = useState([]);

  useEffect(() => {
    const setAds = async () => {
      const dataList = await fetchAds();
      setAdsList(dataList);
    };

    setAds();
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <Route path="/">
        <AdsList adsList={adsList} />
      </Route>
      {/*TODO: I DONT KNOW YET*/}
      <Route path="/ads">
        <AdsList adsList={adsList} />
      </Route>
      <ToastContainer />
    </div>
  );
};

export default Index;
