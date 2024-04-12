import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../post.service';
import { PostSkeleton } from '../post-skeleton';
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  postList: PostSkeleton[] = [];
  postService: PostService = inject(PostService);

  constructor() {
    this.postList = this.postService.getAllPosts();
  }
}
