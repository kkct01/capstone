import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(user: User, password: string, email: string) {
    if(user.id == 32375274 && user.password == password) {
      sessionStorage.setItem('adminAuthenticator', user.lastName,);
      return true;
    }
    else if (user.email == email && user.password == password) {
      sessionStorage.setItem('userAuthenticator', user.lastName);
      return true;
    }
    else
      return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('userAuthenticator')
    return user != null
  }

  isAdminLoggedIn() {
    let user = sessionStorage.getItem('adminAuthenticator')
    return user != null
  }

  logout() {
    if(this.isAdminLoggedIn())
      sessionStorage.removeItem('adminAuthenticator')
    if(this.isUserLoggedIn())
      sessionStorage.removeItem('userAuthenticator')
  }

}
