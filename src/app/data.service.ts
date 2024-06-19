import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataSubject = new BehaviorSubject<Cocktail[]>([]);
  private localStorageKey = 'myData'; // Key for local storage
  constructor(public http: HttpClient) {
    this.getCocktails();
  }
  private getCocktails(): void {
    const storedData = localStorage.getItem(this.localStorageKey);
    if (storedData) {
      this.dataSubject.next(JSON.parse(storedData));
    } else {
      this.http.get<Cocktail[]>('/cockails').subscribe(
        (data) => {
          this.dataSubject.next(data);
          localStorage.setItem(this.localStorageKey, JSON.stringify(data));
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
    }
  }

  getData(): Observable<Cocktail[]> {
    return this.dataSubject.asObservable();
  }
  getCocktailById(id: string) {
    const currentValue = this.dataSubject.getValue();
    const updatedIndex = currentValue.findIndex((item) => item.id === id);
    return currentValue[updatedIndex];
  }
  updateCocktail(updatedCocktail: Cocktail) {
    const currentValue = this.dataSubject.getValue();
    const updatedIndex = currentValue.findIndex(
      (item) => item.id === updatedCocktail.id
    );
    if (updatedIndex !== -1) {
      const updatedData = [...currentValue];
      updatedData[updatedIndex] = { ...updatedCocktail };
      this.dataSubject.next(updatedData);
      localStorage.setItem(this.localStorageKey, JSON.stringify(updatedData));
    }
  }
}
