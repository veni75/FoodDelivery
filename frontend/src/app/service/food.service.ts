import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../model/food';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  
  serverUrl: string = 'http://localhost:3000/foods';
  
  constructor(
    public http: HttpClient,
  ) {
    
   }

  getAll():Observable<Food[]>{    
    return this.http.get<Food[]>(this.serverUrl);
  }
  getAllCategory(category:string):Observable<Food[]>{    
    return this.http.get<Food[]>(`${this.serverUrl}/diet/${category}`);
  }
  
  get(id:number):Observable<Food>{    
    return this.http.get<Food>(`${this.serverUrl}/${id}`);
  }

  create(food:Food): Observable<Food> {
    return this.http.post<Food>(this.serverUrl, food);
  }

  update(food:Food): Observable<Food> {
    return this.http.patch<Food>(`${this.serverUrl}/${food._id}`, food);
  }

  remove(food:Food): Observable<Food> {
    return this.http.delete<Food>(`${this.serverUrl}/${food._id}`);
  }
}