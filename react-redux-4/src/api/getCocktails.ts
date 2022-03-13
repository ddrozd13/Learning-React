import axios from 'axios'

export interface ICocktails {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: number;
};

const getCocktails = async (units: string): Promise<ICocktails[]> => {
  const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${units}`);

  return response.data.drinks;
};

export default getCocktails;
