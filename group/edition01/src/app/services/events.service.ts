import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Event } from 'Event';
@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private url = 'http://localhost:5000/events';
  constructor(private http: HttpClient) {}
  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.url);
  }
}
