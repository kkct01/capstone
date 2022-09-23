import { ActivatedRoute } from '@angular/router';
import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { User } from '../user';

@Component({
  selector: 'app-admin-movies',
  templateUrl: './admin-movies.component.html',
  styleUrls: ['./admin-movies.component.css']
})
export class AdminMoviesComponent implements OnInit {

  constructor(private movieService:MovieService, private activatedRoute:ActivatedRoute) { }

  movies: Movie[] = [];

  uid: string = '';

  ngOnInit(): void {

    this.uid = this.activatedRoute.snapshot.params['id'];

    this.movieService.listAllMovies(this.uid).subscribe({
      next:(res) => this.movies = res
    })
  }
}
