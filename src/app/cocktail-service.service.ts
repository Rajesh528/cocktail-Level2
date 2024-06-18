import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailServiceService {

  constructor(public http: HttpClient) {}

  getCocktails() {
    return this.http.get('/cockails');
  }
  getCocktailById(id:string) {
    return this.http.get(`/cockails/${id}`);
  }
  
}
