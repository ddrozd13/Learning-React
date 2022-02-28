import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack, TextField } from '@mui/material';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import getHolidays, { IHoliday } from '../api/getHolidays';
import styles from './CountryHolidays.module.scss';
import EventNoteIcon from '@mui/icons-material/EventNote';


const CountryHolidays: FC = () => {
  const { countryCode } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [holidays, setHolidays] = useState<IHoliday[] | null>(null);
  const [yearValue, setYearValue] = useState<string>('2022');
  const [open, setOpen] = useState(false);
  const searchParams = new URLSearchParams(location.search);
  const dateAsString = searchParams.get('date');

  const fetchHolidays = async () => {
    const date = dateAsString
    ? new Date(dateAsString)
    : new Date();
    const newHolidays = await getHolidays(countryCode!, date.getFullYear());
    setHolidays(newHolidays);
  };
  const handleOnClick = (countryCode: string) => {
    navigate(`/countries/${countryCode}`);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCountryByYear = async (countryCode: string, year: string | number) => {
    const newHolidays = await getHolidays(countryCode!, Number(year))
    setHolidays(newHolidays)
    handleClose();
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setYearValue(event.target.value)
  };


  useEffect(() => {
    fetchHolidays()
  }, []);

  return (
    <div className={styles.container}>
      {!holidays && <CircularProgress color="secondary" />}
      {holidays && holidays.map((info) => (
        <div key={`${info.name}${info.date}`} className={styles.holidays}>
          <div className={styles.holidaysItem}><EventNoteIcon /> {info.date}</div>
          <div className={styles.holidaysItem}>{info.localName}</div>
          <div className={styles.holidaysItem}> <strong>Original name:</strong>{info.name}</div>
        </div>
      ))}
      <Stack direction="row" spacing={60} sx={{mb: 12}}>
        <Button variant="contained" onClick={handleClickOpen}>See More</Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Holidays Date</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Select your interesting year and press "Submit". We will show holidays at this year
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="year"
              label="Date"
              type="number"
              onChange={handleChange}
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={() => handleCountryByYear(countryCode!, Number(yearValue))}>Submit</Button>
          </DialogActions>
        </Dialog>
        <Button variant="contained" color="error" onClick={() => handleOnClick(countryCode!)}>Go back</Button>
      </Stack>
    </div>
  );
};

export default CountryHolidays;
