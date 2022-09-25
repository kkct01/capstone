package com.movie.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie.backend.entity.CartItem;
import com.movie.backend.repository.CartItemRepo;

@Service
public class CartItemService {
	
	@Autowired
	private CartItemRepo repo;
	
	public List<CartItem> findAllCartItems() {
		return repo.findAll();
	}
	
	public CartItem addNewCartItem(CartItem cartItem) {
		return repo.save(cartItem);
		
	}

}
