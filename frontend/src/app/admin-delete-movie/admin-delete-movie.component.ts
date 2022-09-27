import { MovieService } from './../movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-admin-delete-movie',
  templateUrl: './admin-delete-movie.component.html',
  styleUrls: ['./admin-delete-movie.component.css']
})
export class AdminDeleteMovieComponent implements OnInit {

  uId: string = '';
  mId: string = '';
  movie: Movie = new Movie();

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    this.uId = this.activatedRoute.snapshot.params['uId'];
    this.mId = this.activatedRoute.snapshot.params['mId'];
    this.movieService.findMovieById(this.mId).subscribe({
      next:(res) => this.movie = res
    })
  }

  deleteMovie(uId:string, mId:string) {
    this.movieService.deleteMovie(this.uId, this.mId).subscribe({
      next: (res) => {
        alert('Movie deleted'),
          this.router.navigate(['/adminMovies', this.uId])
      },
      error: (err) => {
        alert('Delete movie failed'),
        this.router.navigate(['/adminMovies', this.uId])
      }
    })
  }
}


