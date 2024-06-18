import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Cocktail } from '../cocktail';

@Component({
  selector: 'app-cocktail-card',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './cocktail-card.component.html',
  styleUrl: './cocktail-card.component.scss',
})
export class CocktailCardComponent {
  @Input() cocktail: Cocktail;
  //taking coctail info from parent and showing on the card
}
