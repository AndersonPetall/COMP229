import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Event } from 'Event';
@Injectable({
  providedIn: 'root',
})
export class EventsService {
  //private url = 'http://localhost:2233/api/';
  private url = 'https://impact-backend-test01.onrender.com/api/';

  constructor(private http: HttpClient) {}
  createOneEvent(event: Event): Observable<any> {
    return this.http.post<any>(this.url + 'create', event);
  }

  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.url + 'get-events');
  }
  getOneEvents(id: string): Observable<Event> {
    return this.http.get<Event>(this.url + `${id}`);
  }
  deleteEvent(id: string): Observable<Event> {
    return this.http.get<Event>(this.url + `delete/${id}`);
  }
  updateOneEvent(event: Event): Observable<any> {
    return this.http.post<any>(this.url + `update/${event._id}`, event);
  }
}
