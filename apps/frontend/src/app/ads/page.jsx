'use client';

import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AdsList } from '../components';
import { fetchAds } from '../page';

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
    <div>
      <AdsList adsList={adsList} isLoading={isLoading} />
      <ToastContainer />
    </div>
  );
};

export default Index;
