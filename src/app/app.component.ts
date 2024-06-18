import { Component } from '@angular/core';
import { CocktailServiceService } from './cocktail-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
  public cocktails: any;
  public filteredCocktails:any;
  searchTerm :any;
  constructor(public data:CocktailServiceService){

  }
  ngOnInit(): void {
    this.data.getCocktails().subscribe((res:any)=>{
      this.cocktails = res;
      this.filteredCocktails = res;
      });
      }
}
