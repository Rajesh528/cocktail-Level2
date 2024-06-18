import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cocktail-card',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './cocktail-card.component.html',
  styleUrl: './cocktail-card.component.scss',
})
export class CocktailCardComponent {
  @Input() cocktail: any;
  //taking coctail info from parent and showing on the card
}
