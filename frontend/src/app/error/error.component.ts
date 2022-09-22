import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMsg: string = '';

  constructor() { }

  ngOnInit(): void {
    this.errorMsg = "Unresolvable error! Please contact the ***IT Department*** for technical support."

  }

}
