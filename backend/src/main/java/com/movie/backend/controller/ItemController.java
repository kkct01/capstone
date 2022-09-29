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

import com.movie.backend.entity.Item;
import com.movie.backend.service.ItemService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ItemController {
	
	@Autowired
	private ItemService service;
	
	@PostMapping("cart/user/{uId}/movie/{mId}")
	public ResponseEntity<Item> saveItem(@PathVariable Integer uId, @PathVariable Integer mId) {
		service.saveItem(uId, mId);
		return ResponseEntity.ok().build();
	}
	
	@GetMapping("cart/user/{uId}")
	public List<Item> getItemByUId(@PathVariable Integer uId) {
		return service.findByUId(uId);	
	}

}
