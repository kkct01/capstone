import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http: HttpClient) { }

 sumbitFile(formData:FormData):Observable<FormData>{
  return this.http.post<FormData>("http://localhost:8089/upload-file",formData)
 }

}
