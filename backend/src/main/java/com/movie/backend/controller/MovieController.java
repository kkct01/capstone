package com.movie.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.movie.backend.entity.Movie;
import com.movie.backend.repository.MovieRepo;
import com.movie.backend.service.MovieService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MovieController {
	
	@Autowired
	private MovieService service;
	
	@Autowired
	private MovieRepo repo; 
	
	@PostMapping("/admin/{id}/add-movie")
	public ResponseEntity<Movie> addNewMovie(@RequestBody Movie movie, @PathVariable Integer id) {
		service.addNewMovieService(movie);
		return ResponseEntity.ok(movie);
		
	}
	
	@GetMapping("/admin/{id}/list-movies")
	public List<Movie> findAllMovies(@PathVariable Integer id) {
		return service.findAllMoviesService();
	}
	
	@GetMapping("/admin/{uid}/movie/{mid}")
	public Movie findMovie(@PathVariable Integer uid, @PathVariable Integer mid) {
		return service.findMovieService(mid);
		
	}
	
	@PutMapping("/admin/{id}/update-movie")
	public ResponseEntity<Movie> updateMovie(@PathVariable Integer id, @RequestBody Movie movie) {
		service.addNewMovieService(movie);
		return ResponseEntity.ok(movie);		
	}

}
