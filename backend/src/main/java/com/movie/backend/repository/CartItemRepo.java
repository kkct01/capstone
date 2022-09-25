package com.movie.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.movie.backend.entity.CartItem;
import com.movie.backend.entity.User;

public interface CartItemRepo extends JpaRepository<CartItem, Integer> {

	List<CartItem> getByUser(User user);
	
	
 
}
