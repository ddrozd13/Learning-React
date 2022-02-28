import { FC, useEffect, useState } from 'react';
import Chart from 'react-google-charts';
import { useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styles from './SecondPage.module.scss';
import getCountryInfo, { ICountryInfo } from '../api/getCountryInfo';

const SecondPage: FC = () => {
  const { country } = useParams();
  const navigate = useNavigate();
  const [cases, setCases] = useState<ICountryInfo[] | null>(null);

  const fetchCountryInfo = async (country: string) => {
    const info = await getCountryInfo(country);
    setCases(info);
  };

  const casesData = cases ? cases.map((elem) => [elem.Date, elem.Confirmed, elem.Deaths]) : [];
  const data = [
    ["Year", "Confirmed", "Death"],
    ...casesData
  ];

  const options = {
    title: "Covid-19",
    curveType: "function",
    legend: { position: "bottom" },
  };

  useEffect(() => {
    fetchCountryInfo(country!);
  }, []);

  return (
    <div className={styles.container}>
      <Chart
        chartType="LineChart"
        width="100%"
        height="800px"
        data={data}
        options={options}
      />
      <Box sx={{display: 'flex', justifyContent: 'center', mt: 6}}>
        <Button variant="outlined" color="error" onClick={ ()=> navigate('/first') }>back</Button>
      </Box>
    </div>
  )
};

export default SecondPage;
