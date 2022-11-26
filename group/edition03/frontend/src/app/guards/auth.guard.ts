import { Injectable, Input } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log(
      `current window.sessionStorage sysUser is : ${window.sessionStorage['sysUser']}`
    );
    if (window.sessionStorage['sysUser'] == null) {
      alert('please login first!');
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }
}
