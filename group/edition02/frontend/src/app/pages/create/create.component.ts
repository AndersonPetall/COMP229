import { Component, OnInit } from '@angular/core';
import { Event } from 'Event';
import { EventsService } from 'src/app/services/eventservice/events.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  event = new Event();
  constructor(private eventsService: EventsService, private router: Router) {}

  ngOnInit(): void {}
  create(form: NgForm): void {
    this.eventsService.createOneEvent(this.event).subscribe((b) => {
      console.log(b);
    });
  }
}
