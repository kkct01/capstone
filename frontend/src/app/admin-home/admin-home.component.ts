import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  id: string = '';

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  

}
