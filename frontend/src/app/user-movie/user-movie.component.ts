import { InteractionService } from './../interaction.service';
import { UserService } from './../user.service';
import { AuthenticationService } from './../authentication.service';
import { MovieService } from './../movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { User } from '../user';

@Component({
  selector: 'app-user-movie',
  templateUrl: './user-movie.component.html',
  styleUrls: ['./user-movie.component.css']
})
export class UserMovieComponent implements OnInit {

  mId: string = '';
  uId: string = '';
  username: string = '';
  movie: Movie = new Movie();
  user: User = new User();
  

  posterBaseUrl = "http://localhost:8089/images"

  constructor(private _interactionService: InteractionService, private userService: UserService, private activatedRoute: ActivatedRoute, private movieService: MovieService, private router: Router, public auth: AuthenticationService) { }

  ngOnInit(): void {
    this.mId = this.activatedRoute.snapshot.params['mId'];
    this.uId = this.activatedRoute.snapshot.params['uId'];
    this.movieService.findMovieById(this.mId).subscribe({
      next: (res) => this.movie = res
    })
    this.userService.getOneUserById(this.uId).subscribe({
      next: (res) => this.user = res
    })
    this._interactionService.sendUId(this.uId)

  }

  
}







