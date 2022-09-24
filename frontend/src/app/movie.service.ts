import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }


  baseUrl = "http://localhost:8089";

  listAllMovies(id:string):Observable<Movie[]> {    
    return this.http.get<Movie[]>(`${this.baseUrl}/admin/${id}/list-movies`);
  }

  addNewMovie(movie: Movie, id:string) {
    return this.http.post<Movie>(`${this.baseUrl}/admin/${id}/add-movie`, movie);
  }

  findMovie(uId: string, mId: string):Observable<Movie> {
    return this.http.get<Movie>(`${this.baseUrl}/admin/${uId}/movie/${mId}`);
  }

  findMovieById(mId: string):Observable<Movie> {
    return this.http.get<Movie>(`${this.baseUrl}/admin/0/movie/${mId}`);
  }

  updateMovie(uId: string, movie:Movie){
    return this.http.put(`${this.baseUrl}/admin/${uId}/update-movie`,movie);
  }

  listAllMoviesHome():Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.baseUrl}/all-movies`);
  }

}
