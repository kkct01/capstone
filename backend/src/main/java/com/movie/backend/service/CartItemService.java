package com.movie.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie.backend.entity.CartItem;
import com.movie.backend.entity.User;
import com.movie.backend.repository.CartItemRepo;

@Service
public class CartItemService {
	
	@Autowired
	private CartItemRepo repo;
	
	
	
	public CartItem addNewCartItem(CartItem cartItem) {
		return repo.save(cartItem);	
	}
	
	public List<CartItem> getCartItemsByUId(Integer uId) {
		User user = new User();
		user.setId(uId);
		return repo.getByUser(user);
			
	}

}
