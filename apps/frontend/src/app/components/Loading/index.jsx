import React from 'react';

import styles from './Loading.module.scss';

export const Loading = () => {
  return (
    <div className={styles.root}>
      <svg
        className={styles.root_wheel}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 32 32"
        xmlSpace="preserve"
      >
        <circle cx="16" cy="16" r="4" fill="none" stroke="#000"></circle>
        <path
          fill="none"
          stroke="#000"
          d="M27.758 10.366l-1-1.732a2 2 0 00-2.732-.732l-.526.304c-2 1.154-4.5-.289-4.5-2.598V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v.608c0 2.309-2.5 3.753-4.5 2.598l-.526-.304a2 2 0 00-2.732.732l-1 1.732a2 2 0 00.732 2.732l.526.304c2 1.155 2 4.041 0 5.196l-.526.304a2 2 0 00-.732 2.732l1 1.732a2 2 0 002.732.732l.526-.304c2-1.155 4.5.289 4.5 2.598V27a2 2 0 002 2h2a2 2 0 002-2v-.608c0-2.309 2.5-3.753 4.5-2.598l.526.304a2 2 0 002.732-.732l1-1.732a2 2 0 00-.732-2.732l-.526-.304c-2-1.155-2-4.041 0-5.196l.526-.304a1.999 1.999 0 00.732-2.732z"
        ></path>
      </svg>
    </div>
  );
};
