import { Injectable } from '@angular/core';
import { PostSkeleton } from './post-skeleton';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { AuthorFormSkeleton } from './author-form-skeleton';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getAllPosts(): Observable<PostSkeleton[]> {
    return this.http.get<PostSkeleton[]>('http://localhost:8080/api/post/all');
  }

  getFeaturedPost(): Observable<PostSkeleton | undefined> {
    return this.getPostById(1);
  }

  getPostById(id: number): Observable<PostSkeleton | undefined> {
    return this.http.get<PostSkeleton>(
      'http://localhost:8080/api/post/id/' + id
    );
  }

  addNewPost(post: AuthorFormSkeleton): Observable<PostSkeleton> {
    return this.http.post<PostSkeleton>(
      'http://localhost:8080/api/post/new/',
      post,
      this.httpOptions
    );
  }

  constructor(private http: HttpClient) {}
}
