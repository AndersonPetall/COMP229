import { Component, OnInit } from '@angular/core';
import { Event } from 'Event';
import { EventsService } from 'src/app/services/eventservice/events.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
})
export class PersonalComponent implements OnInit {
  events?: Event[] = [];
  username = JSON.parse(window.sessionStorage['sysUser']).username;
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
      this.router.navigateByUrl('/personal');
    }
  }
}
