import axios from 'axios';

export interface IResultCountry {
  Country: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  ID: number | string;
}
export interface IGetResult {
  Global: {
    NewConfirmed: number;
    TotalConfirmed: number;
    NewDeaths: number;
    TotalDeaths: number;
    Date: number | string;
  };
  Countries: IResultCountry[];
}

const getResult = async (): Promise<IGetResult> => {
  const response = await axios.get(`https://api.covid19api.com/summary`)

  return response.data;
};

export default getResult;
