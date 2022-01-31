import { FC } from 'react';
import Button from '@mui/material/Button';

interface IHeaderProps {
  buttonText?: string,
  onClick?: () => void,
}

const Header: FC<IHeaderProps> = ({ children, buttonText = 'Edit', onClick }) => {
  return (
    <h1>
     {children}
     <Button onClick={onClick} variant="contained">{buttonText}</Button>
    </h1>
  )
};

export default Header;