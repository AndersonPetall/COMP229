import { Component, OnInit } from '@angular/core';
import { User } from 'User';
import { UsersService } from 'src/app/services/userservice/users.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user = new User();
  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {}
  register(form: NgForm): void {
    this.usersService.register(this.user).subscribe((b) => {
      if (b.success) {
        this.usersService.login(this.user).subscribe((b) => {
          if (b.success) {
            window.sessionStorage['sysUser'] = JSON.stringify(b.user);
            alert(`Welcome  ${this.user.username} !`);
            this.router.navigateByUrl('/personal').then((b) => {
              window.location.reload();
            });
          }
        });
      }
    });
  }
}
