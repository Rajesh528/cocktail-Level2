import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CocktailComponent } from './cocktail/cocktail.component';

export const routes: Routes = [
    {path:"cocktails", component:MenuComponent},
    {path:"cocktailDetails/:id", component:CocktailComponent},
    {path:"",redirectTo:"cocktails",pathMatch:"full"}
];
