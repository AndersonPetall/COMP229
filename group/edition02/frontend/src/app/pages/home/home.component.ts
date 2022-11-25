import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event } from 'Event';
import { EventsService } from 'src/app/services/eventservice/events.service';
import { Injectable } from '@angular/core';

@Injectable()
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  events?: Event[] = [];
  constructor(private eventsService: EventsService, private router: Router) {}

  ngOnInit(): void {
    this.eventsService.getAllEvents().subscribe((events) => {
      this.events = events;
    });
  }
  onDelete(id?: string) {
    if (confirm('Are you sure ?') && id !== undefined) {
      this.eventsService.deleteEvent(id).subscribe((b) => {
        this.events?.splice(
          this.events.findIndex((b) => b._id === id),
          1
        );
      });
    } else {
      console.log(id);
      window.location.reload(); //refresh fix
      this.router.navigateByUrl('/');
    }
  }
}
