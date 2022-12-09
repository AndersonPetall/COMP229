import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/userservice/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  loginStatus = window.sessionStorage['sysUser'] != null;
  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {}
  logout(): void {
    this.usersService.logout().subscribe((b) => {
      console.log(b);
      if (b.success) {
        window.sessionStorage.clear();
        this.router.navigateByUrl('/').then((b) => {
          window.location.reload();
        });
      }
    });
  }
}
