import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private auth:AuthenticationService) { }

  ngOnInit(): void {
    this.auth.logout();
    window.setTimeout(function () {
      location.href = "http://localhost:4200";
  }, 3000);
  }

}
