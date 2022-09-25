import { InteractionService } from './../interaction.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  uId: string = '';

  constructor(private _interactionService:InteractionService, public auth: AuthenticationService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.isAdminLoggedIn = this.auth.isAdminLoggedIn();
    this.isUserLoggedIn = this.auth.isUserLoggedIn();
    this._interactionService.uId$.subscribe({
      next:(res) => this.uId = res
    })
    this._interactionService.sendUId(this.uId)
  }

      
}
