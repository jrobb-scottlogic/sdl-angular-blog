import { Component, inject } from '@angular/core';
import { PostSkeleton } from '../post-skeleton';
import { PostService } from './../post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  post: PostSkeleton | undefined;
  postService: PostService = inject(PostService);

  constructor() {
    const id = 1;
    this.post = this.postService!.getPostById(id);
  }
}
