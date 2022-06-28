import axios from './api';

export interface IHoliday {
  date: number;
  name: string;
  localName: string;
};

const getHolidays = async (countryCode: string, year: number): Promise<IHoliday[]> => {
  if(year <= 1969){
    alert('Not found this year')
    return []
  }else {
    const response = await axios.get(`publicholidays/${year}/${countryCode}`);

    return response.data;
  };
};

export default getHolidays;
