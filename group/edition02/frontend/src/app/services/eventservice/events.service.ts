import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Event } from 'Event';
@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private url = 'http://localhost:2233/api/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Origin,X-Requested-With,Content-Type,Accept',
    }),
  };
  constructor(private http: HttpClient) {}
  createOneEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(
      this.url + 'create',
      JSON.stringify(event),
      this.httpOptions
    );
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
  updateOneEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(
      this.url + `update/${event._id}`,
      JSON.stringify(event),
      this.httpOptions
    );
  }
}
