import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/post.model'
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:8080/post'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  
  getApproved(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:8080/posts');
  }
  
  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:8080/posts/all');
  }

  get(id: number): Observable<Post> {
    return this.http.get<Post>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: number, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  findByCategory(category: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${baseUrl}?cat=${category}`);
  }

}
