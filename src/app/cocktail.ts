export interface Cocktail {
  filter(arg0: (cocktail: Cocktail) => boolean): any;
  id: string;
  imageUrl: string;
  ingredients: any;
  instructions: string;
  isAlcoholic: boolean;
  name: string;
  isFavorite?: boolean;
}

// {"id": "12560",
//         "name": "Afterglow",
//         "isAlcoholic": false,
//         "imageUrl": "https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg",
//         "instructions": "Mix. Serve over ice.",
//         "ingredients": [
//           "Grenadine",
//           "Orange juice",
//           "Pineapple juice"
//         ]}

// "11023": {
//     "id": "11023",
//     "name": "Almeria",
//     "isAlcoholic": true,
//     "imageUrl": "https://www.thecocktaildb.com/images/media/drink/rwsyyu1483388181.jpg",
//     "ingredients": [ "Dark rum", "Kahlua", "Egg white" ],
//     "instructions": "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass."
//   },