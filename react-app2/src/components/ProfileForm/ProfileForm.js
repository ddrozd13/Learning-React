import { useState } from 'react';
import uniqId from 'uniqid';

const ProfileForm = ({ user, onSave }) => {

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoSrc, setPhotoSrc] = useState(user.photoSrc);
  const [hobbies, setHobbies] = useState(user.hobbies);
  const [isLoading, setLoading] = useState(false);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  }
  const handlePhotoSrcChange = (event) => {
    setPhotoSrc(event.target.value);
  }
  const labelsStyles = {
    display: 'flex',
    flexDirection: 'column',
  }
  const handleOnHobbyAdd = () => {
    setHobbies([
      ...hobbies,
      { id: uniqId(), name: '' },
    ]);
  };
  const handleOnHobbyDelete = (hobbyToDelete) => {
    return () => {
      const filterHobbies = hobbies.filter((hobby) => hobby.id !== hobbyToDelete.id);
      setHobbies(filterHobbies);
    };
  };
  const handleProfileSave = () => {
    setLoading(true);
    onSave({
      firstName,
      lastName,
      photoSrc,
      hobbies,
    })
    setLoading(false);
  };

  const handleOnHobbyChange = (editableHobby) => (event) => {
    const newHobbies = hobbies.map((hobby) => ({ ...hobby}));
    const hobbyToUpdate = newHobbies.find((hobby) => hobby.id === editableHobby.id);
    hobbyToUpdate.name = event.target.value;
    setHobbies(newHobbies);
  };

  return (
    <div style={labelsStyles}>
      <label>
        First Name:
        <input value={firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        LastName Name:
        <input value={lastName} onChange={handleLastNameChange} />
      </label>
      <label>
        Photo src:
        <input value={photoSrc} onChange={handlePhotoSrcChange} />
      </label>
      <div>
        <strong>Hobbies</strong>
        {hobbies.map((hobby) => (
          <div key={hobby.id}>
            <input value={hobby.name} onChange={handleOnHobbyChange(hobby)}/>
            <button onClick={handleOnHobbyDelete(hobby)}>&times;</button>
          </div>
        ))}
        <button onClick={handleOnHobbyAdd}>Add</button>
      </div>
      <button onClick={handleProfileSave} disabled={isLoading}>
        {isLoading ? 'Loading' : 'Save'}
      </button>
    </div>
  );
};

export default ProfileForm;
