import { Observable } from 'rxjs';
import { Item } from './item';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  baseUrl = "http://localhost:8089";

  constructor(private http:HttpClient) { }

  saveItem(uId:string, mId:string):Observable<Item> {
    return this.http.post<Item>(`${this.baseUrl}/cart/user/${uId}/movie/${mId}`,{})
  }

  getItems(uId:string):Observable<Item[]>{
    return this.http.get<Item[]>(`${this.baseUrl}/cart/user/${uId}`)
  }
}
