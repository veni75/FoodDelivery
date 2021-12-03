import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../model/message';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  
  serverUrl: string = 'http://localhost:3000/messages';
  
  constructor(
    public http: HttpClient,
  ) {
    
   }

  getAll():Observable<Message[]>{    
    return this.http.get<Message[]>(this.serverUrl);
  }

  get(id:number):Observable<Message>{    
    return this.http.get<Message>(`${this.serverUrl}/${id}`);
  }

  create(message:Message): Observable<Message> {
    return this.http.post<Message>(this.serverUrl, message);
  }

  update(message:Message): Observable<Message> {
    return this.http.patch<Message>(`${this.serverUrl}/${message._id}`, message);
  }

  remove(message:Message): Observable<Message> {
    return this.http.delete<Message>(`${this.serverUrl}/${message._id}`);
  }

}