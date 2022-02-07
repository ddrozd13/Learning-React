import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import getCountryInfo, { ICountryInfo } from '../api/getCountryInfo';
import { Button, CircularProgress } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { indigo } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import styles from './CountryInfo.module.scss';

const CountryInfo: FC = () => {
  const { countryCode} = useParams();
  const [countryInfo, setCountryInfo] = useState<ICountryInfo | null>(null);
  const navigate = useNavigate();
  const fetchCountryInfo = async () => {
    setCountryInfo(null);
    const newCountryInfo = await getCountryInfo(countryCode!);
    setCountryInfo(newCountryInfo);
  };

  const handleOnClick = () => {
    navigate(`/`);
  }
  const handleCountryClick = (countryCode: string) => () => {
    navigate(`/countries/${countryCode}`)
  }
  const handleOnHolidays = (countryCode: string) => {
    navigate(`/countries/${countryCode}/holidays`)
  }

  useEffect(() => {
    fetchCountryInfo();
  }, [countryCode])
  return (
    <div className={styles.container}>
      <div>
        {!countryInfo && <CircularProgress color='secondary'/>}
        {countryInfo && (
          <div>
            <div>
            <span className={styles.text}>Region:</span> {countryInfo.region}
            </div>
            <div>
              <span className={styles.text}>Country code:</span>{countryInfo.countryCode}
            </div>
            <div>
            <span className={styles.text}>Country name:</span> {countryInfo.commonName}
            </div>
            <div>
            <span className={styles.text}>Full name:</span> {countryInfo.officialName}
            </div>
            <Stack direction="row" spacing={2} sx={{alignItems: 'center', display: 'inline-flex'}}>
              {countryInfo.borders?.map((info) => (
                <Avatar key={`${info.region}${info.commonName}`} sx={{  bgcolor: indigo[200], width: 70, height: 70}} onClick={handleCountryClick(info.countryCode)}>
                  <img
                    loading="lazy"
                    width="20"
                    src={`https://flagcdn.com/w20/${info.countryCode.toLowerCase()}.png`}
                    srcSet={`https://flagcdn.com/w40/${info.countryCode.toLowerCase()}.png 2x`}
                    alt={`Flag of ${info.officialName}`}
                  />
                  {info.countryCode}
                </Avatar>
              ))}
            </Stack>
            <Stack direction="row" spacing={60} sx={{mt: 30}}>
              <Button variant="contained" onClick={() => handleOnHolidays(countryInfo?.countryCode)}>Check Holidays</Button>
              <Button variant="contained" color="error" onClick={handleOnClick}>Go back</Button>
            </Stack>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryInfo;
