import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, List, ListItemText, Pagination, Stack, Switch, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './App.module.scss';
import PageLayout from './components/PageLayout/PageLayout';
import getCocktailsAction from './store/getAlcoholCocktails/ActionCreator';
import { RootState } from './store/store';

const App: FC = () => {
  const [checked, setChecked] = useState(['Alcohol']);
  const { cocktails } = useSelector((state: RootState) => state.getAlcoholCocktails);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleOnOpenDetails = (id: number) => {
    navigate(`/id=${id}`);
  }
  useEffect(() => {
    if(checked.indexOf('Alcohol') !== -1){
      dispatch(getCocktailsAction('Alcoholic'))
    }else {
      dispatch(getCocktailsAction('Non_Alcoholic'))
    }
  }, [checked])
  return (
    <PageLayout>
      <div className={styles.container && styles.free}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <List className={styles.checkboxAlcohol}>
              <ListItemText id="switch-alcohol" primary="Alcohol" />
              <Switch
                edge="end"
                onChange={handleToggle('Alcohol')}
                checked={checked.indexOf('Alcohol') !== -1}
                inputProps={{
                  'aria-labelledby': 'Alcohol',
                }}
              />
            </List>
            {cocktails && cocktails.map((item) => (
              <div key={item.idDrink} className={styles.card} onClick={() => handleOnOpenDetails(item.idDrink)}>
                <Card>
                  <CardActionArea className={styles.cardArea}>
                    <CardMedia
                      component="img"
                      image={item.strDrinkThumb}
                      alt={item.strDrink}
                      className={styles.cardImage}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.strDrink}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Learn more
                    </Button>
                  </CardActions>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default App;
