'use client';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AdsList } from './components';

import styles from './index.module.scss';

export const fetchAds = async () => {
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAds = async () => {
      setIsLoading(true);

      const dataList = await fetchAds();

      setIsLoading(false);
      setAdsList(dataList);
    };

    getAds();
  }, []);

  return (
    <div className={styles.container}>
      <AdsList adsList={adsList} isLoading={isLoading} />
      <ToastContainer />
    </div>
  );
};

export default Index;
