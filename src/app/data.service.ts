import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataSubject = new BehaviorSubject<any[]>([]);
  constructor(public http: HttpClient) {
    this.getCocktails();
  }
  private getCocktails(): void {
    this.http.get<any[]>('/cockails').subscribe(
      (data) => {
        this.dataSubject.next(data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  getData(): Observable<any[]> {
    return this.dataSubject.asObservable();
  }
  getCocktailById(id:any) {
    return this.http.get<Cocktail>(`/cockails/${id}`);
  }
  updateCocktail(updatedCocktail:Cocktail){
    const currentValue = this.dataSubject.getValue();
    const updatedIndex = currentValue.findIndex(item => item.id === updatedCocktail.id);
    if (updatedIndex !== -1) {
      const updatedData = [...currentValue];
      updatedData[updatedIndex] = { ...updatedCocktail };
      this.dataSubject.next(updatedData);
    }
  }
}
