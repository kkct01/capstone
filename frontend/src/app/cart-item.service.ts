import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartItem } from './cart-item';
import { Movie } from './movie';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {

  baseUrl = 'http://localhost:8089'

  constructor(private http:HttpClient) { }

  saveCartItem(cartItem: CartItem) {
    return this.http.post(`${this.baseUrl}/cart/add-item`,cartItem);
  }
}