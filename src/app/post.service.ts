import { Injectable } from '@angular/core';
import { PostSkeleton } from './post-skeleton';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
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

  constructor(private http: HttpClient) {}
}
