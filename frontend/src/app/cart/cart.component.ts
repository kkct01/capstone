import { HttpClient } from '@angular/common/http';
import { MovieService } from './../movie.service';
import { ItemService } from './../item.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { Movie } from '../movie';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  uId: string = '';
  items: Item[] = [];
  mIds: string[] = [];
  movies: Movie[] = [];


  constructor(private http: HttpClient, private _interactionService: InteractionService, private activatedRoute: ActivatedRoute, private itemService: ItemService, private movieService: MovieService) { }

  ngOnInit(): void {
    this._interactionService.uId$.subscribe({
      next:(res) => this.uId = res
    })
    this.uId = this.activatedRoute.snapshot.params['uId'];
    this.itemService.getItems(this.uId).subscribe({
      next: (res) => {
        this.items = res;
        this.mIds = res.map(a => a.mId)
        console.log(this.mIds)
      }
    });

    this.movieService.getCartMovies(this.mIds, this.uId).subscribe({
      next:(res) => this.movies = res
    })
    
  
  }
}
