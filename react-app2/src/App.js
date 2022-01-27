import React, { useEffect, useState } from 'react';
import ButtonLink from './components/ButtonLink/ButtonLink';
import Profile from './components/Profile/Profile';
import ProfileForm from './components/ProfileForm/ProfileForm';
import { TailSpin } from 'react-loader-spinner';
import getProfile from './api/getProfile';
import updateProfile from './api/updateProfile';



const App = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState(null);
  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleSave = async (newProfileData) => {
    setIsEdit(false);
    const updateData = await updateProfile(newProfileData);
    setData(updateData);
  };


  const userProfileContainerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px 50px',
  };

  const fetchProfileData = async () => {
    const newData = await getProfile();
    setData(newData);
  };

  useEffect(() => {
    fetchProfileData();
  }, []);
  
  return (
    <div>
      <div style={userProfileContainerStyles}>
        User Profile{' '}
        {!isEdit && data && (
        <ButtonLink onClick={handleEdit}>
          Edit
        </ButtonLink>
        )}
      </div>
      {!data && <TailSpin color="grey" height={80} width={80} />}
      {!isEdit && data && <Profile user={data}/>}
      {isEdit && data && <ProfileForm user={data} onSave={handleSave}/>}
    </div>
  );
};

export default App;
