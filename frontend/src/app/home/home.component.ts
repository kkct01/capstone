import { MovieService } from './../movie.service';
import { AuthenticationService } from './../authentication.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: string = '';
  uId: string = '';

  movies: Movie[] = []

  baseUrl = "http://localhost:8089/images"

  constructor(private _interactionService: InteractionService, private activatedRoute: ActivatedRoute, public auth:AuthenticationService, private movieService:MovieService) { }

  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.params['firstName'];
    this.uId = this.activatedRoute.snapshot.params['uId'];
    this.movieService.listAllMoviesHome().subscribe({
      next:(res) => this.movies = res
    });
    this._interactionService.sendUId(this.uId)
  }

  

}
