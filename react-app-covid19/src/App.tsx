import { FC, useState } from 'react';
import styles from './App.module.scss';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const App: FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  const handleClose = (): void => {
    setOpen(false);
    navigate('/first');
  };

  return (
    <div className={styles.container}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ display: 'flex', justifyContent: 'center', color: 'black', fontSize: 30 }} id="draggable-dialog-title">
          Nice to meet you, my Friend
        </DialogTitle>
        <DialogContent style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img
              alt="virus"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/SARS-CoV-2_%28CDC-23312%29.png/1200px-SARS-CoV-2_%28CDC-23312%29.png"
              className={styles.containerImg}
            />
          <DialogContentText>
            This site shows statistics of fears that have survived virus such as covid-19
            Click "LET'S START" to be continue...
          </DialogContentText>
        </DialogContent>
        <DialogActions   sx={{display: 'inline-flex', justifyContent: 'center'}}>
          <Button
            autoFocus
            onClick={handleClose}
            variant="contained"
            color="success"

          >
            let's start!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default App;
