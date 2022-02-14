import axios from 'axios';

export interface ICountryInfo {
  Confirmed: number;
  Deaths: number;
  Date: Date;
}

const getCountryInfo = async (country: string): Promise<ICountryInfo[] | []> => {
  const response  = await axios.get<ICountryInfo[] | []>(`https://api.covid19api.com/total/dayone/country/${country}`);

  return response.data;
};

export default getCountryInfo;
