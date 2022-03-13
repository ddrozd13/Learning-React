import { AppBar, Container } from '@mui/material';
import { FC, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './PageLayout.module.scss';

const PageLayout: FC = ({children}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleGoToHome = (): void => {
    navigate('/');
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={styles.mainContainer}>
      <AppBar position='sticky' className={styles.appBar}>
        <Container className={styles.container}>
          <div className={styles.logo} onClick={handleGoToHome}>Cocktails</div>
          <div className={styles.developer}>Powered by D.Drozd</div>
        </Container>
      </AppBar>
      {children}
    </div>
  )
};

export default PageLayout;
