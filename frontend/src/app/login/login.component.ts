import { AuthenticationService } from './../authentication.service';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userBackend: User = new User();

  inputEmail: string = '';
  inputPassword: string = '';

  showAlert = false;

  invalidLogin = false;

  constructor(private userService: UserService, private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  userLogin(inputEmail: string) {
    this.userService.getOneUser(inputEmail).subscribe({
      next: (res) => { 
        if(res != null)       
          this.userBackend = res, this.validation();
        else if(res == null)
          this.showAlert = true; 
      },
      error: (err) => this.router.navigate(['**'])
    });
  }

  validation() {
    if (this.authenticationService.authenticate(this.userBackend, this.inputPassword, this.inputEmail)) {
      if(this.userBackend.id == 97936732)
        this.router.navigate(['adminHome',this.userBackend.id]);
      else
        this.router.navigate(['home',this.userBackend.firstName, this.userBackend.id]);
    } else
      this.showAlert = true;
   }

   

}

