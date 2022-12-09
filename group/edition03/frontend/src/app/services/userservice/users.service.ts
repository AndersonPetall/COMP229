import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from 'User';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  //private url = 'http://localhost:2233/api/';
  private url = 'https://impact-backend-test01.onrender.com/api/';
  constructor(private http: HttpClient) {}
  login(user: User): Observable<any> {
    return this.http.post<any>(this.url + 'login', user);
  }
  register(user: User): Observable<any> {
    return this.http.post<any>(this.url + 'register', user);
  }
  checkStatus(): Observable<any> {
    return this.http.get<any>(this.url + 'status');
  }
  logout(): Observable<any> {
    return this.http.delete<any>(this.url + 'logout');
  }
}
