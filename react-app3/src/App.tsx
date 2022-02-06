import { FC, useEffect, useState } from 'react';
import styles from './App.module.scss';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import getAllCountries, { IBaseAllCountry } from './components/api/getAllCountries';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

const App: FC = () => {
  const [personName, setPersonName] = useState<string[]>([]);
  const [countries, setCountries] = useState<IBaseAllCountry[] | null>(null);
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

  const fetchAllCountries = async () => {
    const allCountries = await getAllCountries();
    setCountries(allCountries);
  };

  const handleOnClick = (countryCode: string): void => {
    navigate(`/countries/${countryCode}`)
  }

  useEffect(() => {
    fetchAllCountries();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        Hello my dear friend
        Choose your country
        {!countries && <CircularProgress color='secondary'/>}
        {countries && (
          <FormControl sx={{ display: 'inline' }} className={styles.form} >
            <InputLabel variant="outlined"  htmlFor="uncontrolled-native" color="info" sx={{mt: 20}}>Country</InputLabel>
            <Select
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
              key={`key`}
              sx={{width: 250, mt: 20, mr: 5, bgcolor: 'white'}}
              color="info"
            >
              <MenuItem sx={{ displayPrint: 'block' }} disabled>Choose country</MenuItem>
              {countries.map((country) => (
                <MenuItem
                  key={`${country.countryCode}${country.name}`}
                  value={country.countryCode}
                  sx={{mb: 1}}
                >
                  <img
                    loading="lazy"
                    width="20"
                    src={`https://flagcdn.com/w20/${country.countryCode.toLowerCase()}.png`}
                    srcSet={`https://flagcdn.com/w40/${country.countryCode.toLowerCase()}.png 2x`}
                    alt={`Flag of ${country.name}`}
                  />
                  &nbsp;
                  {country.name}
                </MenuItem>
              ))}
            </Select>
            <Button variant="contained" color="error" sx={{ width: 120}} onClick={() => personName[0] && handleOnClick(personName[0])}>Show Info</Button>
          </FormControl>
        )}
      </div>
    </div>
  );
}

export default App;
