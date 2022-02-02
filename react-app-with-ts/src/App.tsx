import { FC, useState } from 'react';
import './App.css';
import GetInsult from './api/getInsult';
import Button from '@mui/material/Button';

interface IInsultProps {
  onClick?: () => void
}
const App: FC<IInsultProps> = () => {
  const [frag, setFrag] = useState(<GetInsult />);
  const handleOnClick = () => {
    setFrag(<GetInsult />)
  }
  return (
    <div className="app-container">
      <div className="main-container">
        Генератор злобных оскорблений
        <div className="insult-container">
          {frag}
        </div>
        <Button className="button"
        variant="contained"
        color='warning'
        onClick={handleOnClick}
        >
          Нажми!
        </Button>
      </div>
    </div>
  );
};

export default App;
