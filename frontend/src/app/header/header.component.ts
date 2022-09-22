import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn: boolean = false;
  isAdminLoggedIn: boolean = false;

  constructor(public auth: AuthenticationService) { }

  ngOnInit(): void {
    this.isAdminLoggedIn = this.auth.isAdminLoggedIn();
    this.isUserLoggedIn = this.auth.isUserLoggedIn();
  }

}
