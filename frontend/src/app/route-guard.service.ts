import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private auth:AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.auth.isAdminLoggedIn())
      return true;
    return false;
  }
}
