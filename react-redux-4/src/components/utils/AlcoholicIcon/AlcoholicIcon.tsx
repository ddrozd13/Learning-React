import { Tooltip, IconButton } from '@mui/material';
import { FC } from 'react';
import LiquorIcon from '@mui/icons-material/Liquor';
import FaceIcon from '@mui/icons-material/Face';
import styles from './AlcoholicIcon.module.scss';

interface IAlcoholicIcon {
  type: string
}
const AlcoholicIcon: FC<IAlcoholicIcon> = ({ type }) => {
  return (
    <Tooltip title={type === 'Alcoholic' && 'Alcoholic' || 'Non alcoholic'} className={styles.icon}>
      <IconButton>
        {type === 'Alcoholic' && <LiquorIcon className={styles.icon}/>}
        {type === 'Non alcoholic' && <FaceIcon className={styles.icon}/>}
      </IconButton>
    </Tooltip>
  )
};

export default AlcoholicIcon;
