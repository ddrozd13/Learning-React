import { FC, useEffect, useState } from 'react';
import getUsers, { IUsers } from './components/api/getUsers';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import styles from './App.module.scss';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const App: FC = () => {
  const [users, setUsers] = useState<IUsers[] | null>(null);
  const navigate = useNavigate();
  const fetchUsers = async () => {
    setUsers(null);
    const users = await getUsers();
    setUsers(users);
  };

  const handleOnClick = (id: number) => {
    navigate(`/users/${id}`);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

    return (
      <div>
        {!users && (
          <Box sx={{ width: 300 }}>
            <Skeleton />
          </Box>
        )}
        {users && (
          <div>
            {users.map((profile) => (
              <div key={profile.id} className={styles.userCard}>
                <div><span>Username:</span>{profile.username} </div>
                <div><span>Name:</span>{profile.name}</div>
                <div><span>City:</span>{profile.address.city}</div>
                <Button onClick={() => handleOnClick(Number(profile.id))} variant="contained">Show info</Button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
};

export default App;
