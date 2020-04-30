//7a6393c8-d447-42c4-a96c-c878293f246a

const latestCurrenciesUrl = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=25"

const lastQuotesUrl =  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest"

const getLatestCryptocurrencies = (start, sort, sortDirection) => {
  let fetchUrl =`${latestCurrenciesUrl}&start=${start}`;
  fetchUrl = sort.length > 0 ? `${fetchUrl}&sort=${sort}` : fetchUrl;
  fetchUrl = sortDirection.length > 0 ? `${fetchUrl}&sort_dir=${sortDirection}` : fetchUrl;

  let myHeaders = new Headers();
  myHeaders.append("X-CMC_PRO_API_KEY", "7a6393c8-d447-42c4-a96c-c878293f246a");
  myHeaders.append("Accept", "application/json");

  let requestOptions = {
    method: 'GET',
    headers: myHeaders
  };

  return fetch(fetchUrl, requestOptions).then(response => response.json()).then(response => {
    return Promise.resolve(response);
  });
}

const getLatestQuotes = (id) => {
  const fetchUrl =`${lastQuotesUrl}?id=${id}`;

  let myHeaders = new Headers();
  myHeaders.append("X-CMC_PRO_API_KEY", "7a6393c8-d447-42c4-a96c-c878293f246a");
  myHeaders.append("Accept", "application/json");

  let requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };


  return fetch(fetchUrl, requestOptions).then(response => response.json())
}

export { getLatestCryptocurrencies, getLatestQuotes } ;