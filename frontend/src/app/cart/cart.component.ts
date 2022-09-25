import { ActivatedRoute } from '@angular/router';
import { CartItemService } from './../cart-item.service';
import { Component, OnInit } from '@angular/core';
import { CartItem } from '../cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  uId: string = '';
  cartItems: CartItem[] = [];

  constructor(private cartItemService: CartItemService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.snapshot.params['uId'];
    this.cartItemService.listCartItems(this.uId).subscribe({
      next:(res) => this.cartItems = res
    })
  }

}
