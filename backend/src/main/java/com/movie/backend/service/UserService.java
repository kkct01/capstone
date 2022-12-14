package com.movie.backend.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.movie.backend.entity.Movie;
import com.movie.backend.entity.User;
import com.movie.backend.repository.UserRepo;

@Service
public class UserService {
	
	@Autowired
	private UserRepo repo;
	
	public User addNewUserService(User user) {
		return repo.save(user);
	}
	
	public User getUserByEmailService(String email) {
		return repo.findByEmail(email);
	}
	
		
	public User getUserByIdService(Integer id) {
		return repo.findById(id).orElse(null);
	}
	
	public List<User> getAllUsersService(Integer id) {
		return repo.findAll();
	}

}
