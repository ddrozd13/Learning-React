import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import getCountryInfo, { ICountryInfo } from '../api/getCountryInfo';
import { CircularProgress } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import Stack from '@mui/material/Stack';

const CountryInfo: FC = () => {
  const { countryCode} = useParams();
  const [countryInfo, setCountryInfo] = useState<ICountryInfo | null>(null);
  const navigate = useNavigate();
  const fetchCountryInfo = async () => {
    setCountryInfo(null);
    const newCountryInfo = await getCountryInfo(countryCode!);
    setCountryInfo(newCountryInfo);
  };

  const handleCountryClick = (countryCode: string) => () => {
    navigate(`/countries/${countryCode}`)
  }
  useEffect(() => {
    fetchCountryInfo();
  }, [countryCode])
  return (
    <div>
      {!countryInfo && <CircularProgress color='secondary'/>}
      {countryInfo && (
        <div>
          <div>
          {countryInfo.commonName} ({countryInfo.offficialName} - {countryInfo.region})
          </div>
          <div>
            {countryInfo.countryCode}
          </div>
          <Stack direction="row" spacing={2}>
            {countryInfo.borders.map((info) => (
              <Avatar sx={{ bgcolor: deepOrange[500] }} onClick={handleCountryClick(info.countryCode)}>{info.countryCode}</Avatar>
            ))}
          </Stack>
        </div>
      )}
    </div>
  );
};

export default CountryInfo;