import { Button, CircularProgress, FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getAllCountries, { IAllCountries } from '../api/getAllCounties';
import getResult, { IGetResult } from '../api/getResult';
import styles from './FirstPage.module.scss';

const FirstPage: FC = () => {
  const [personName, setPersonName] = useState<string[]>([]);
  const [countries, setCountries] = useState<IAllCountries[] | null>(null);
  const [stats, setStats] = useState<IGetResult | null>(null);
  const navigate = useNavigate();
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const updateDate = (): string => {
    let date = new Date();
    let dateDay = date.getDate();
    let dateMonth = date.getMonth() + 1;
    let dateYear = date.getFullYear();

    return `${dateDay}.${dateMonth}.${dateYear}`;
  }

  const handleOnClick = (country: string): void => {
    navigate(`/first/${country}`);
  };

  const fetchStatCountry = async () => {
    const result = await getResult();
    setStats(result);
  };

  const fetchAllCountries = async () => {
    const countryInfo = await getAllCountries();
    setCountries(countryInfo);
  };

  useEffect(() => {
    fetchAllCountries();
    fetchStatCountry();
  }, []);

  return (
    <div className={styles.main}>
      {!stats && !countries && <CircularProgress color='secondary'/>}
      {countries && (
        <FormControl sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }} className={styles.form} >
          <Select
            value={personName}
            onChange={handleChange}
            MenuProps={MenuProps}
            key={`key`}
            sx={{width: 400, bgcolor: 'white', mr: 10}}
            color="info"
          >
            <MenuItem sx={{ displayPrint: 'block' }} disabled>Choose country</MenuItem>
            {countries.map((country) => (
              <MenuItem
                key={`${country.ISO2}${country.Country}`}
                value={country.ISO2}
                sx={{mb: 1}}
              >
                <img
                  loading="lazy"
                  width="20"
                  src={`https://flagcdn.com/w20/${country.ISO2.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w40/${country.ISO2.toLowerCase()}.png 2x`}
                  alt={`Flag of ${country.Slag}`}
                />
                &nbsp;
                {country.Country}
              </MenuItem>
            ))}
          </Select>
          <Button variant="contained" color="error" sx={{ width: 120}} onClick={() => personName[0] && handleOnClick(personName[0])}>Show Info</Button>
        </FormControl>
      )}
      <div className={styles.container}>
        {stats && (
          <div className={styles.global}>
            <i>Total in world: </i>
            <div className={styles.items}>
              <strong>Last update:</strong>
              {updateDate()}
            </div>
            <div className={styles.items}>
              <strong>New confirmed cases:</strong>
              {stats.Global.NewConfirmed}
            </div>
            <div className={styles.items}>
              <strong>Cases in the world:</strong>
              {stats.Global.TotalConfirmed}
            </div>
            <div className={styles.items}>
              <strong>New deaths:</strong>
              {stats.Global.NewDeaths}
            </div>
            <div className={styles.items}>
              <strong>Total Deaths:</strong>
              {stats.Global.TotalDeaths}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FirstPage;
