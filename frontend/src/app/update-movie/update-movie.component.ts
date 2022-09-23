import { MovieService } from './../movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { ThisReceiver } from '@angular/compiler';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {

  uId: string = '';
  mId: string = '';
  movie: Movie = new Movie();
  
  constructor(private activatedRoute:ActivatedRoute, private movieService:MovieService, private router:Router) { }

  ngOnInit(): void {
    this.uId = this.activatedRoute.snapshot.params['uid'];
    this.mId = this.activatedRoute.snapshot.params['mid'];
    this.movieService.findMovie(this.uId, this.mId).subscribe({
      next:(res) => this.movie = res      
    });
  }

  
  updateMovie(uId:string, movie:Movie) {
    this.movieService.updateMovie(uId, movie).subscribe({
      next:(res) => alert('Movie updated'),
      error:(err) => alert('Update movie failed')
    })
  }

}
