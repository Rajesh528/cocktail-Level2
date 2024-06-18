import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { DataService } from '../data.service';
import { Cocktail } from '../cocktail';

@Component({
  selector: 'app-cocktail',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './cocktail.component.html',
  styleUrl: './cocktail.component.scss',
})
export class CocktailComponent implements OnInit {
  itemId: string | null;
  cocktail: Cocktail;
  constructor(
    private route: ActivatedRoute,
    private cocktailService: DataService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.itemId = params.get('id');
      // Use this.itemId as needed in  component to load cocktail details
    });

    if (this.itemId) {
      this.cocktailService
        .getCocktailById(this.itemId)
        .subscribe((res: Cocktail) => {
          this.cocktail = res;
        });
    }
  }
  // add / or remove as favorite
  updateFavorite(id: string, flag: boolean) {
    this.cocktail.isFavorite = flag;
    this.cocktailService.updateCocktail(this.cocktail);
  }
}
