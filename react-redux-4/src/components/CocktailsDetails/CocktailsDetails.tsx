import { Card, CardActionArea, CardMedia, CardContent, Typography} from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import getCocktailsDetailsAction from '../../store/getCocktailsDetails/ActionCreator';
import { RootState } from '../../store/store';
import PageLayout from '../PageLayout/PageLayout';
import AlcoholicIcon from '../utils/AlcoholicIcon/AlcoholicIcon';
import styles from './CocktailsDetails.module.scss';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LocalBarIcon from '@mui/icons-material/LocalBar';

const CocktailsDetails: FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { cocktailsDetails } = useSelector((state: RootState) => state.getCocktailsDetails);
  const [ingredient, ] = useState<(string | null)[]>([]);
  const [measures, ] = useState<(string | number | null)[]>([]);
  cocktailsDetails?.forEach((item) => {
    ingredient.push(
      item.strIngredient1,
      item.strIngredient2,
      item.strIngredient3,
      item.strIngredient4,
      item.strIngredient5,
      item.strIngredient6,
      item.strIngredient7,
      item.strIngredient8,
      item.strIngredient9,
      item.strIngredient10,
      item.strIngredient11,
      item.strIngredient12,
      item.strIngredient13,
      item.strIngredient14,
      item.strIngredient15,
    );
  });
  cocktailsDetails?.forEach((item) => {
    measures.push(
      item.strMeasure1,
      item.strMeasure2,
      item.strMeasure3,
      item.strMeasure4,
      item.strMeasure5,
      item.strMeasure6,
      item.strMeasure7,
      item.strMeasure8,
      item.strMeasure9,
      item.strMeasure10,
      item.strMeasure11,
      item.strMeasure12,
      item.strMeasure13,
      item.strMeasure14,
      item.strMeasure15,
    );
  });

  useEffect(() => {
    dispatch(getCocktailsDetailsAction(Number(id)));
  }, [ingredient, measures]);
  return (
    <PageLayout>
      <div>
        {cocktailsDetails && cocktailsDetails.map((item) => (
          <div key={item.idDrink} className={styles.container}>
            <Card>
              <CardActionArea className={styles.card}>
                <CardMedia
                  component="img"
                  image={item.strDrinkThumb}
                  alt={item.strDrink}
                  className={styles.cardImage}
                />
                <CardContent>
                  <Typography gutterBottom variant="h3" component="div" className={styles.title}>
                    {item.strDrink}
                  </Typography>
                  <Typography  variant="h5" component="div" className={styles.center}>
                    <AlcoholicIcon type={item.strAlcoholic} />
                    <Typography variant="h5" component="div" fontWeight="bold">{item.strAlcoholic}</Typography>
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div" className={styles.center}>
                    <Typography variant="h5" component="div" fontWeight="bold" className={styles.iconContainer}>
                      <LocalBarIcon  className={styles.icon}/> Glass:
                    </Typography>
                    &nbsp;{item.strGlass}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div" className={styles.center}>
                    <Typography variant="h5" component="div" fontWeight="bold" className={styles.iconContainer}>
                      <LibraryBooksIcon className={styles.icon}/> Instructions:
                    </Typography>
                    &nbsp;{item.strInstructions}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div" className={styles.ingredients}>
                    <Typography variant="h5" component="div" fontWeight="bold">Ingredients: </Typography>
                      <div>
                        <ul className={styles.list}>
                          {ingredient.map((item) => item !== null && (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div" className={styles.ingredients}>
                    <Typography variant="h5" component="div" fontWeight="bold">Measures: </Typography>
                      <div key="key">
                        <ul className={styles.list}>
                          {measures.map((item) => item !== null && (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </div>
    </PageLayout>
  )
};

export default CocktailsDetails;
