import { Component, OnInit } from '@angular/core';
import { User } from 'User';
import { UsersService } from 'src/app/services/userservice/users.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = new User();
  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {}
  login(form: NgForm): void {
    this.usersService.login(this.user).subscribe((b) => {
      console.log(b);
      if (b.success) {
        window.sessionStorage['sysUser'] = JSON.stringify(b.user);
        alert(`Welcome  ${this.user.username} !`);
        this.router.navigate(['/personal']).then((b) => {
          console.log(b);
          window.location.reload();
        });
      }
    });
  }
}
