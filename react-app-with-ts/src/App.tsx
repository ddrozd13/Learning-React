import { FC, useEffect, useState } from 'react';
import './App.css';
import getInsult, { IInsult } from './api/getInsult';
import Button from '@mui/material/Button';
import { CircularProgress } from '@mui/material';

interface IInsultProps {
  onClick?: () => void
}
const App: FC<IInsultProps> = () => {
  const [insult, setInsult] = useState<IInsult | null>(null);
  const fetchInsult = async () => {
    setInsult(null)
    const data = await getInsult();
    setInsult(data)
  }
  useEffect(() => {
    fetchInsult();
  }, [])
  const handleOnClick = () => {
    fetchInsult()
  }
  return (
    <div className="app-container">
    {!insult && <CircularProgress />}
    {insult && (
      <div className="main-container">
        Генератор злобных оскорблений
        <div className="insult-container">
          {insult}
        </div>
        <Button
          variant="contained"
          color='warning'
          onClick={handleOnClick}
        >
          Нажми!
        </Button>
      </div>
    )}
    </div>
  );
};

export default App;
