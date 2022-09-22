import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User = new User();

  confirm: string = ''

  invalidConfirm: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  addNewUser(user: User) {
    if(this.confirm == user.password) {
      this.userService.addNewUser(user).subscribe({
      next:(res) => alert("New user added successfully"),
      error:(err) => alert("Failed to add user")
    })
    } else {
      this.invalidConfirm = true;
    }
  }
}
