import { Component, OnInit } from '@angular/core';
import { Event } from 'Event';
import { EventsService } from 'src/app/services/eventservice/events.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
})
export class PersonalComponent implements OnInit {
  events?: Event[] = [];
  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.eventsService.getAllEvents().subscribe((events) => {
      this.events = events;
    });
  }
}
