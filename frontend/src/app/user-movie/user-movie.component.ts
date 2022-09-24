import { AuthenticationService } from './../authentication.service';
import { MovieService } from './../movie.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-user-movie',
  templateUrl: './user-movie.component.html',
  styleUrls: ['./user-movie.component.css']
})
export class UserMovieComponent implements OnInit, AfterViewInit {

  mId: string = '';

  movie: Movie = new Movie();

  posterBaseUrl = "http://localhost:8089/images/"

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService, private router: Router, public auth:AuthenticationService) { }

  ngOnInit(): void {
    this.mId = this.activatedRoute.snapshot.params['mId'];
    }

  ngAfterViewInit(): void {
    this.movieService.findMovieById(this.mId).subscribe({
      next: (res) => this.movie = res
    })
  }

}
