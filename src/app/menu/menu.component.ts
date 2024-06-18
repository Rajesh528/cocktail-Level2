import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { CocktailCardComponent } from '../cocktail-card/cocktail-card.component';
import { Cocktail } from '../cocktail';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, CocktailCardComponent, FormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  public cocktails: Cocktail[];
  public filteredCocktails: Cocktail[];
  searchTerm: string;
  constructor(public cocktailService: DataService) {}
  ngOnInit(): void {
    this.cocktailService.getData().subscribe((res: Cocktail[]) => {
      this.cocktails = res;
      this.filteredCocktails = res;
    });
  }
  // based on the search this function give result
  onFilterChange(): void {
    this.filteredCocktails = this.cocktails.filter((cocktail: Cocktail) =>
      cocktail.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
