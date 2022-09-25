import { UserService } from './../user.service';
import { InteractionService } from './../interaction.service';
import { ActivatedRoute } from '@angular/router';
import { CartItemService } from './../cart-item.service';
import { Component, OnInit } from '@angular/core';
import { CartItem } from '../cart-item';
import { User } from '../user';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  uId: string = '';
  cartItems: CartItem[] = [];
  user: User = new User();
  

  constructor(private userService: UserService, private _interactionService: InteractionService, private cartItemService: CartItemService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {    
    this._interactionService.uId$.subscribe({
      next:(res) => this.uId = res
    })
    this.uId = this.activatedRoute.snapshot.params['uId'];
    this.userService.getOneUserById(this.uId).subscribe({
      next:(res) => this.user = res
    })
    
  }

  listCartItemsByUId(user:User) {
    this.cartItemService.getCartItemsByUserId(user).subscribe({
      next:(res) => this.cartItems = res
    })

    console.log(this.cartItems)
  }
  

}
