import { Injectable } from '@angular/core';
import { PostSkeleton } from './post-skeleton';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { AuthorFormSkeleton } from './author-form-skeleton';

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

  getPostsByTag(tag: String): Observable<PostSkeleton[]> {
    return this.http.get<PostSkeleton[]>(
      'http://localhost:8080/api/post/tag/' + tag
    );
  }

  addNewPost(post: AuthorFormSkeleton) {
    return this.http.post<PostSkeleton>(
      'http://localhost:8080/api/post/new',
      post
    );
  }

  constructor(private http: HttpClient) {}
}
