import '../styles/latest.scss';
import '../styles/loading.scss';

import React, { useState, useEffect } from 'react';
import { getLatestCryptocurrencies } from '../services/CoinMakerService'

function Latest() {

  const [latestCryptocurrencies, setLatestCryptocurrencies] = useState ([]);
  const [pagination, setPagination] = useState (1);
  const [sort, setSort] = useState ("");
  const [sortDirection, setSortDirection] = useState ("");
  const [isLoading, setIsLoading] = useState (true);

  useEffect(() => {
    setIsLoading(true)
    getLatestCryptocurrencies(pagination, sort, sortDirection).then(response => {
      setIsLoading(false)
      setLatestCryptocurrencies(response.data);
    });
  }, [pagination, sort, sortDirection]);

  const renderData = (data, index) => {
    const anchorUrl = "detail?id=" + data.id;

    return (
        <tr key={'latest'+data.id}>
          <td><a href={anchorUrl}>{data.name}</a></td>
          <td><a href={anchorUrl}>{data.symbol}</a></td>
          <td><a href={anchorUrl}>{data.quote.USD.market_cap}</a></td>
          <td><a href={anchorUrl}>{data.quote.USD.price}</a></td>
        </tr>
    )
  };

  return (
    <div className="wrapper">

      <p className="title_filter">Sort</p>
      <div className="box">
        <select id="SortBy" onChange={(event) => {setPagination(1);setSort(event.target.value)}} value={sort}>
          <option value=""/>
          <option value="name">Name</option>
          <option value="symbol">Symbol</option>
          <option value="market_cap">Market Cap</option>
          <option value="price">Price</option>
        </select>
      </div>

      <p className="title_filter">Direction</p>
      <div className="box">
        <select id="Order" onChange={(event) => {setPagination(1);setSortDirection(event.target.value)}} value={sortDirection}>
          <option value=""/>
          <option value="asc">Acs</option>
          <option value="desc">Desc</option>
        </select>
      </div>

      <div className="latestData">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Symbol</th>
              <th>Market Cap</th>
              <th>Price</th>
            </tr>
          </thead>
          {!isLoading &&
            <tbody>
             {latestCryptocurrencies.map(renderData)}
            </tbody>
          }

        </table>

        {isLoading &&
          <div className="wrapper_loader">
            <div className="loader"></div>
          </div>
        }


      </div>
        <div className="wrapper_pagination">
          <button className="button_pagination" disabled={pagination === 1} onClick={() => {setPagination(pagination - 1)}}>
            Previous
          </button>
          <button className="button_pagination" disabled={latestCryptocurrencies.length < 25} onClick={() => {setPagination(pagination + 1)}}>
            Next
          </button>
        </div>
    </div>
  );
}

export default Latest;
