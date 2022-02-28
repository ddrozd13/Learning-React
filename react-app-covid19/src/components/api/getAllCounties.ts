import axios from 'axios';

export interface IAllCountries {
  Country: string;
  Slag: string;
  ISO2: string;
}
const getAllCountries = async (): Promise<IAllCountries[]> => {
  const response = await axios.get<IAllCountries[]>('https://api.covid19api.com/countries');

  return response.data;
};

export default getAllCountries;
