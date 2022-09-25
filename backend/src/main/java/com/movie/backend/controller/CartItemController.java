package com.movie.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.movie.backend.entity.CartItem;
import com.movie.backend.entity.Movie;
import com.movie.backend.entity.User;
import com.movie.backend.service.CartItemService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CartItemController {
	
	@Autowired
	private CartItemService service;
	
	@PostMapping("/cart/add-item")
	public ResponseEntity<CartItem> addItemToCart(@RequestBody CartItem cartItem){
		service.addNewCartItem(cartItem);
		return ResponseEntity.ok(cartItem);		
	}
	
	@GetMapping("/cart/user/{uId}")
	public List<CartItem> getCartItemByUId(@PathVariable Integer uId) {
		return service.getCartItemsByUId(uId);
		
	}
	
	
}
