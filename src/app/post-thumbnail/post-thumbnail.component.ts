import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TagComponent } from '../tag/tag.component';
import { PostSkeleton } from './../post-skeleton';
import { PostService } from './../post.service';
@Component({
  selector: 'app-post-thumbnail',
  standalone: true,
  imports: [CommonModule, TagComponent, RouterLink],
  templateUrl: './post-thumbnail.component.html',
  styleUrl: './post-thumbnail.component.css',
})
export class PostThumbnailComponent {
  @Input() postSkeleton: PostSkeleton | undefined;

  postService: PostService = inject(PostService);

  @Input()
  set id(id: number) {
    this.postService
      .getPostById(id)
      .subscribe((data) => (this.postSkeleton = data));
  }
}
