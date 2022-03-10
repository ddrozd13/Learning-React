import { AppBar, Button, Container } from '@mui/material';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../redux';
import { createPlace } from '../../redux/Places/ActionCreators';
import { OpenPlaceSafePopup } from '../../redux/PopupManagement/ActionCreator';
import CreateSafePlacePopup from '../CreateSafePlacePopup/CreateSafePlacePopup';
import { IValidateCreateSafePlaceFormData } from '../CreateSafePlacePopup/validateCreateSafePlaceForm';
import styles from './PageLayout.module.scss';

const PageLayout: FC = ({children}) => {
  const navigate = useNavigate();
  const { isCreateSafePlacePopupOpen } = useSelector((state: RootState) => state.popupManagement);
  const dispatch = useDispatch();
  const handleGoToHome = (): void => {
    navigate('/');
  };
  const handleAddSafePlace = () => {
    dispatch(OpenPlaceSafePopup());
  };
  const handleOnSave = async (data: IValidateCreateSafePlaceFormData) => {
    await dispatch(createPlace(data));
    dispatch(OpenPlaceSafePopup());
  };

  return (
    <div className={styles.mainContainer}>
      <AppBar position='sticky' className={styles.appBar}>
        <Container className={styles.container}>
          <div className={styles.logo} onClick={handleGoToHome}>Ukraine</div>
          <Button variant='contained' color='secondary' onClick={handleAddSafePlace}>Add New Safe Place</Button>
        </Container>
      </AppBar>
      {children}
      { isCreateSafePlacePopupOpen && <CreateSafePlacePopup onSave={handleOnSave}/>}
    </div>
  );
};

export default PageLayout;
