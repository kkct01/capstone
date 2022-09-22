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

  baseUrl = "http://localhost:4200";

  listAllMovies(id:number):Observable<Movie[]> {
    
    return this.http.get<Movie[]>(`${this.baseUrl}/user/${id}/list-movies`);
  }

  


}
