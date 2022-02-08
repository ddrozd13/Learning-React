import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import getProfile from '../api/getProfile';
import { IUsers } from '../api/getUsers';
import styles from './UserInfo.module.scss';


const UserInfo: FC = () => {
  const [userInfo, setUserInfo] = useState<IUsers | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/')
  }
  const fetchUsers = async (id: number) => {
    setUserInfo(null);
    const profile = await getProfile(id);
    setUserInfo(profile);
  };
  useEffect(() => {
    fetchUsers(Number(id));
  }, [id])
  return (
    <div>
      {!userInfo && (
        <Box>
        </Box>)}
      {userInfo && (
        <div key={userInfo.id} className={styles.userInfo}>
          <div className={styles.contacts}>
            <span>Contacts:</span>
            <div className={styles.contactsItem}>
              <span>Email:</span> {userInfo.email}
              <span>Phone:</span> {userInfo.phone}
            </div>
          </div>
          <div><span>Name:</span>{userInfo.name}</div>
          <div className={styles.contacts}>
            <span>Company:</span>
            <div className={styles.contactsItem}>
              <span>Name company:</span> {userInfo.company.name}
              <span>Phrase:</span> {userInfo.company.catchPhrase}
            </div>
          </div>
        </div>
      )}
      <Button onClick={handleOnClick} sx={{ml: 200}} variant="outlined" color="error"> GO BACK</Button>
    </div>
  );
}

export default UserInfo;
