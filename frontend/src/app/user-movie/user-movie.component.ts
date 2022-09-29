import { ItemService } from './../item.service';
import { InteractionService } from './../interaction.service';
import { UserService } from './../user.service';
import { AuthenticationService } from './../authentication.service';
import { MovieService } from './../movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { User } from '../user';
import { Item } from '../item';

@Component({
  selector: 'app-user-movie',
  templateUrl: './user-movie.component.html',
  styleUrls: ['./user-movie.component.css']
})
export class UserMovieComponent implements OnInit {

  mId: string = '';
  uId: string = '';
  
  movie: Movie = new Movie();
  user: User = new User();
  item: Item = new Item();
  

  posterBaseUrl = "http://localhost:8089/images"

  constructor(private itemService: ItemService, private _interactionService: InteractionService, private userService: UserService, private activatedRoute: ActivatedRoute, private movieService: MovieService, private router: Router, public auth: AuthenticationService) { }

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

  saveItem(uId:string, mId:string) {
    this.item.mId = this.mId;
    this.item.uId = this.uId;
    this.itemService.saveItem(uId, mId).subscribe({
      next:(res) => alert('Movie put to cart'),
      error: (err) => alert('Fail to put movie to cart')
    })
  }
}







