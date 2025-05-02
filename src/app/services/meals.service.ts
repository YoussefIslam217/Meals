import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  constructor(private _HttpClient:HttpClient) {}

  getMealTags():Observable<any>{
    return this._HttpClient.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  }

  getMealsItems(x:any):Observable<any>{
    return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${x}`);
  }

  getAllMeals(mealName:string=''):Observable<any>{
    return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
  }
}
