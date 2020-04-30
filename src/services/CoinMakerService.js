const latestCurrenciesUrl = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=25"

const lastQuotesUrl =  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest"

const getLatestCryptocurrencies = (start, sort, sortDirection) => {
  let fetchUrl =`${latestCurrenciesUrl}&start=${start}`;
  fetchUrl = sort.length > 0 ? `${fetchUrl}&sort=${sort}` : fetchUrl;
  fetchUrl = sortDirection.length > 0 ? `${fetchUrl}&sort_dir=${sortDirection}` : fetchUrl;

  let myHeaders = new Headers();
  myHeaders.append("X-CMC_PRO_API_KEY", process.env.REACT_APP_API_KEY);
  myHeaders.append("Accept", "application/json");

  let requestOptions = {
    method: 'GET',
    headers: myHeaders
  };

  return validateResponse(fetch(fetchUrl, requestOptions).then(response => response.json()))
}

const getLatestQuotes = (id) => {
  const fetchUrl =`${lastQuotesUrl}?id=${id}`;

  let myHeaders = new Headers();
  myHeaders.append("X-CMC_PRO_API_KEY", process.env.REACT_APP_API_KEY);
  myHeaders.append("Accept", "application/json");

  let requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };


  return validateResponse(fetch(fetchUrl, requestOptions).then(response => response.json()))
}

const validateResponse = (p) => {
    return p.catch(response => {
      return Promise.reject("Failed to fetch probably blocked due to CORS policy please check Readme for more information");
    }).then(response => {
      const errorCode = response.status.error_code;
      if (errorCode !== 0) {
          const error = response.status.error_message;
          return Promise.reject(error);
      } else {
        return Promise.resolve(response);
      }
    });
}

export { getLatestCryptocurrencies, getLatestQuotes } ;