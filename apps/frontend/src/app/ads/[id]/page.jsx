'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { AdDetails } from '../../components';

import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const fetchAdById = async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:8000/api/ads/${id}`);

    return data;
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

const AdsId = ({ params }) => {
  const [ad, setAd] = useState({});

  useEffect(() => {
    const getAd = async () => {
      const fetchData = await fetchAdById(params.id);

      setAd(fetchData);
    };

    getAd();
  }, []);

  return (
    <div>
      <AdDetails ad={ad} />
      <ToastContainer />
    </div>
  );
};

export default AdsId;
