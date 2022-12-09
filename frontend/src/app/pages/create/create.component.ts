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
    this.event.imageUrl = `./assets/imgs/${this.event.type}.jpg`;
    this.eventsService.createOneEvent(this.event).subscribe((b) => {
      if (b.success) {
        this.router.navigateByUrl('/perosnal').then((b) => {
          console.log(b);
          window.location.reload();
        });
      }
    });
  }
}
