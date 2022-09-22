package com.movie.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.movie.backend.entity.Movie;
import com.movie.backend.service.MovieService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MovieController {
	
	@Autowired
	private MovieService service;
	
//	@PostMapping("/add-movie")
//	public ResponseEntity<Movie> addNewMovie(Movie movie) {
//		service.addNewMovieService(movie);
//		return ResponseEntity.ok(movie);
//		
//	}
//	
//	@GetMapping("/user/{id}/list-movies")
//	public List<Movie> findAllMovies(@PathVariable ) {
//		return service.findAllMoviesService();
//	}
//	
//	

}
