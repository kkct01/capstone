import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: string = '';

  constructor(private activatedRoute: ActivatedRoute, public auth:AuthenticationService) { }

  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.params['firstName'];
  }

}
