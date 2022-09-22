package com.movie.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

import com.movie.backend.entity.Movie;
import com.movie.backend.entity.User;
import com.movie.backend.repository.MovieRepo;
import com.movie.backend.repository.UserRepo;

@Service
public class MovieService {
	
	@Autowired
	private MovieRepo repo;
	
	public Movie addNewMovieService(Movie movie) {
		return repo.save(movie);
	}
	
	public List<Movie> findAllMoviesService() {
		return repo.findAll();
	}

}
