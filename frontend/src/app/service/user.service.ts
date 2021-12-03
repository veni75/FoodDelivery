import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  entity = 'users';
  serverUrl: string = 'http://localhost:3000/users';

  constructor(
    public http: HttpClient,
    private config: ConfigService,
  ) {

  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.serverUrl);
  }

  getOne(id: number): Observable<User> {
    return this.http.get<User>(`${this.serverUrl}/${id}`);
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(this.serverUrl, user);
  }

  update(user: User): Observable<User> {
    return this.http.patch<User>(`${this.serverUrl}/${user._id}`, user);
  }

  remove(user: User): Observable<User> {
    return this.http.delete<User>(`${this.serverUrl}/${user._id}`);
  }

  get(id?: string | number): Observable<User | User[]> {
    let url = `${this.config.apiUrl}${this.entity}`;
    if (id) {
      url += `/${id}`;
    }

    return this.http.get<User[]>(url);
  }

  query(queryString: string): Observable<User | User[]> {
    const url = `${this.config.apiUrl}${this.entity}?${queryString}`;
    return this.http.get<User[]>(url);
  }
}