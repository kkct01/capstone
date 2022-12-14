package com.movie.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.movie.backend.entity.User;

public interface UserRepo extends JpaRepository<User, Integer>{

	User findByEmail(String email);

}
