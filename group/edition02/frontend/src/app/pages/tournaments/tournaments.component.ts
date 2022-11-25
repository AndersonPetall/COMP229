import { Component, OnInit } from '@angular/core';
import { Event } from 'Event';
import { EventsService } from 'src/app/services/eventservice/events.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css'],
})
export class TournamentsComponent implements OnInit {
  event = new Event();
  id?: string;
  constructor(
    private eventsService: EventsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['Event._id'].slice(1);
    });
    //
    console.log(this.id);
    this.eventsService.getOneEvents(this.id as string).subscribe((event) => {
      this.event._id = event._id;
      this.event.imageUrl = event.imageUrl;
      this.event.type = event.type;
      this.event.description = event.description;
      this.event.startDay = event.startDay;
      this.event.endDay = event.endDay;
      this.event.contestants = event.contestants;
    });
  }
  update(form: NgForm): void {
    this.eventsService.updateOneEvent(this.event as Event).subscribe((b) => {
      console.log(b);
    });
  }
}
