import axios from 'axios';
import Currencies from '../components/constants/Currencies';

const getBitcoinData = async (currency = Currencies.AmericanDollars) => {
  const response = await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?id=bitcoin&vs_currency=${currency}&days=1&interval=hourly`);

  return response.data;
};

export default getBitcoinData;
