package com.movie.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
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

	public Movie findMovieService(Integer id) {
		return repo.findById(id).orElse(null);
	}
	
	public Movie updateMovieService(Movie movie) {
		Movie targetedMovie = repo.findById(movie.getId()).orElse(null);
		targetedMovie.setTitle(movie.getTitle());
		targetedMovie.setOpening(movie.getOpening());
		targetedMovie.setDuration(movie.getDuration());
		targetedMovie.setLanguage(movie.getLanguage());
		targetedMovie.setDirector(movie.getDirector());
		targetedMovie.setCast(movie.getCast());
		targetedMovie.setSynopsis(movie.getSynopsis());
		targetedMovie.setPosterLink(movie.getPosterLink());
		return repo.save(targetedMovie);

	}
	
	public void deleteMovieService(Integer mId) {
		repo.deleteById(mId);
		
	}
	
	
}
