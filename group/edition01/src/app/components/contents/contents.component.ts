import { Component, OnInit } from '@angular/core';
import { Event } from 'Event';
import { EventsService } from 'src/app/services/events.service';
@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css'],
})
export class ContentsComponent implements OnInit {
  events?: Event[] = [];
  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe((events) => {
      this.events = events;
    });
  }
}
