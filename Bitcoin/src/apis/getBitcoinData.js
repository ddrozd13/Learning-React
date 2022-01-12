import axios from 'axios';

const getBitcoinData = async (api) => {
  const response = await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?id=bitcoin&vs_currency=${api}&days=1&interval=hourly`);

  return response.data;
};

export default getBitcoinData;
