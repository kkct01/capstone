import { ActivatedRoute } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {

  users: User[] = [];

  id: string = '';

  

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params['id'];

    this.userService.getAllUsers(this.id).subscribe({
      next: (res) => this.users = (res)
    });

  }



}