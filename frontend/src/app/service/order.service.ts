import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../model/order';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  
  serverUrl: string = 'http://localhost:3000/orders';
  
  constructor(
    public http: HttpClient,
  ) {
    
   }

  getAll():Observable<Order[]>{    
    return this.http.get<Order[]>(this.serverUrl);
  }

  get(id:number):Observable<Order>{    
    return this.http.get<Order>(`${this.serverUrl}/${id}`);
  }

  create(order:Order): Observable<Order> {
    return this.http.post<Order>(this.serverUrl, order);
  }

  update(order:Order): Observable<Order> {
    return this.http.patch<Order>(`${this.serverUrl}/${order._id}`, order);
  }

  remove(order:Order): Observable<Order> {
    return this.http.delete<Order>(`${this.serverUrl}/${order._id}`);
  }
}