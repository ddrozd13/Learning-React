import axios from 'axios'

export interface ICocktailsDetails {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: number;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strMeasure1: string | number | null;
  strMeasure2: string | number | null;
  strMeasure3: string | number | null;
  strMeasure4: string | number | null;
  strMeasure5: string | number | null;
  strMeasure6: string | number | null;
  strMeasure7: string | number | null;
  strMeasure8: string | number | null;
  strMeasure9: string | number | null;
  strMeasure10: string | number | null;
  strMeasure11: string | number | null;
  strMeasure12: string | number | null;
  strMeasure13: string | number | null;
  strMeasure14: string | number | null;
  strMeasure15: string | number | null;
};

const getCocktailsDetails = async (id: number): Promise<ICocktailsDetails[]> => {
  const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);

  return response.data.drinks;
};

export default getCocktailsDetails;