import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from 'User';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url = 'http://localhost:2233/api/';

  constructor(private http: HttpClient) {}
  authenticate(user: User): Observable<any> {
    return this.http.get<any>(this.url + 'login');
  }
  register(user: User): Observable<User> {
    return this.http.post<User>(this.url + 'register', user);
  }
  logout(): Observable<any> {
    return this.http.get<any>(this.url + 'logout');
  }
}
