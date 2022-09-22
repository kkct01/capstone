import { MovieService } from './../movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-admin-add-movie',
  templateUrl: './admin-add-movie.component.html',
  styleUrls: ['./admin-add-movie.component.css']
})
export class AdminAddMovieComponent implements OnInit {

  id: string = '';

  movie: Movie = new Movie();

  constructor(private activatedRoute:ActivatedRoute, private movieService:MovieService, private router:Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  saveMovie(movie:Movie, id: string) {
    this.movieService.addNewMovie(movie, id).subscribe({
      next:(res) => alert('New movie added successfully'),
      error:(err) => alert('Add movie failed')
    });
  }

}
