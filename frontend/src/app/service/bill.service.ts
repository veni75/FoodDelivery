import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from '../model/bill';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BillService {

 
  serverUrl: string = 'http://localhost:3000/bills';
  
  constructor(
    public http: HttpClient,
  ) {
    
   }

  getAll():Observable<Bill[]>{    
    return this.http.get<Bill[]>(this.serverUrl);
  }

  get(id:number):Observable<Bill>{    
    return this.http.get<Bill>(`${this.serverUrl}/${id}`);
  }

  create(bill:Bill): Observable<Bill> {
    return this.http.post<Bill>(this.serverUrl, bill);
  }

  update(bill:Bill): Observable<Bill> {
    return this.http.patch<Bill>(`${this.serverUrl}/${bill._id}`, bill);
  }

  remove(bill:Bill): Observable<Bill> {
    return this.http.delete<Bill>(`${this.serverUrl}/${bill._id}`);
  }

}