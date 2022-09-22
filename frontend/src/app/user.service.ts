import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  
  baseUrl = "http://localhost:8089"

  addNewUser(user: User): Observable<User> {
    console.log(user)
    return this.http.post<User>(`${this.baseUrl}/user`,user);
  }

  getOneUser(email: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/user/${email}`)
  }

  getAllUsers(id: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/user/admin/${id}`)
  }

  

}
