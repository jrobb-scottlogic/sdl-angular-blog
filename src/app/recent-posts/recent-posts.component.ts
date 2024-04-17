import { Component, inject } from '@angular/core';
import { PostThumbnailComponent } from '../post-thumbnail/post-thumbnail.component';
import { PostService } from '../post.service';
import { PostSkeleton } from '../post-skeleton';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recent-posts',
  standalone: true,
  templateUrl: './recent-posts.component.html',
  styleUrl: './recent-posts.component.css',
  imports: [CommonModule, PostThumbnailComponent],
})
export class RecentPostsComponent {
  postList: PostSkeleton[] = [];
  postService: PostService = inject(PostService);

  constructor() {
    this.postList = this.postService.getAllPosts();
  }
}
