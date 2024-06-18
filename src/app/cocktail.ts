export interface Cocktail {
  id: string;
  imageUrl: string;
  ingredients: string[];
  instructions: string;
  isAlcoholic: boolean;
  name: string;
  isFavorite?: boolean;
}