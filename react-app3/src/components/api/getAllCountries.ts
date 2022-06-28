import axios from './api';

export interface IBaseAllCountry {
  countryCode: string;
  name: string;
};

const getAllCountries = async (): Promise<IBaseAllCountry[]> => {
  const response = await axios.get<IBaseAllCountry[]>('AvailableCountries');

  return response.data;
};

export default getAllCountries;
