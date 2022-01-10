import axios from 'axios';

const getBitcoinData = async () => {
  const response = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?id=bitcoin&vs_currency=usd&days=1&interval=hourly');

  return response.data;
};

export default getBitcoinData;
