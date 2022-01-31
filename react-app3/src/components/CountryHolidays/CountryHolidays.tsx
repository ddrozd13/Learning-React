import { FC } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const CountryHolidays: FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  const handleOnClick = (): void => {
    navigate(`/countries/${params.countryCode}`);
  };
  return (
    <div>
      Country Holidays: {params.countryCode}

      <Button onClick={handleOnClick} variant="outlined">Go To Country Info Page</Button>
    </div>
  )
}

export default CountryHolidays;
