package com.movie.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.movie.backend.entity.Movie;

public interface MovieRepo extends JpaRepository<Movie, Integer>{

}
