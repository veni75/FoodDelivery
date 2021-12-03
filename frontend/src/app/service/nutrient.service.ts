import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nutrient } from '../model/nutrient';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NutrientService {  
  serverUrl: string = 'http://localhost:3000/nutrients';
  
  constructor(
    public http: HttpClient,
  ) {    
   }

  getAll():Observable<Nutrient[]>{    
    return this.http.get<Nutrient[]>(this.serverUrl);
  }

  get(id:number):Observable<Nutrient>{    
    return this.http.get<Nutrient>(`${this.serverUrl}/${id}`);
  }

  create(nutrient:Nutrient): Observable<Nutrient> {
    return this.http.post<Nutrient>(this.serverUrl, nutrient);
  }

  update(nutrient:Nutrient): Observable<Nutrient> {
    return this.http.patch<Nutrient>(`${this.serverUrl}/${nutrient._id}`, nutrient);
  }

  remove(nutrient:Nutrient): Observable<Nutrient> {
    return this.http.delete<Nutrient>(`${this.serverUrl}/${nutrient._id}`);
  }
}