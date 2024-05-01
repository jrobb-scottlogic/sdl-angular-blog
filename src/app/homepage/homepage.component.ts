import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentPostsComponent } from '../recent-posts/recent-posts.component';
import { FeaturedStoryComponent } from '../featured-story/featured-story.component';
import { PostService } from '../post.service';
import { PostSkeleton } from '../post-skeleton';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RecentPostsComponent, FeaturedStoryComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  featured: PostSkeleton | undefined;
  postService: PostService = inject(PostService);

  constructor() {
    this.postService
      .getFeaturedPost()
      .subscribe((data) => (this.featured = data));
  }
}
