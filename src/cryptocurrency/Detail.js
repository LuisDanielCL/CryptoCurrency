import '../styles/detail.scss';
import '../styles/loading.scss';

import React, { useState, useEffect } from 'react';
import { getLatestQuotes } from '../services/CoinMakerService'

function Detail() {

  const [latestQuotes, setLatestQuotes] = useState ({});
  const [isLoading, setIsLoading] = useState (true);

  useEffect(() => {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    if (id) {
      getLatestQuotes(id).then(response => {
        const data = Object.entries(response.data)[0][1];
        setLatestQuotes(data);
        setIsLoading(false);
      });
    }
  }, []);

  const dataInfo = JSON.stringify(latestQuotes, null, 2)

  return (
    <div className="wrapper">

      {!isLoading ?
        <>
          <h1 className="title">{latestQuotes.name}</h1>
          <pre className="data">
            {dataInfo}
          </pre>
        </> :
        <div className="loader"/>
      }

    </div>
  );
}

export default Detail;
