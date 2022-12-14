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

import com.movie.backend.entity.User;
import com.movie.backend.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	
	@Autowired
	private UserService service;
	
	@PostMapping("/user")
	public ResponseEntity<User> addNewUser(@RequestBody User user) {
		service.addNewUserService(user);
		return ResponseEntity.ok(user);	
	}
	
	@GetMapping("/user/{email}")
	public User getUserByEmail(@PathVariable String email) {
		return service.getUserByEmailService(email);
	}
	
	@GetMapping("/user/admin/{id}")
	public List<User> getAllUsers(@PathVariable Integer id) {
		return service.getAllUsersService(id);
	}
	
	@GetMapping("/userId/{uId}")
	public User getUserById(@PathVariable Integer uId) {
		return service.getUserByIdService(uId);
		
	}
	
	

}
