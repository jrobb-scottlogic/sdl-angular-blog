import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';
import { PostSkeleton } from '../post-skeleton';
import { CommonModule } from '@angular/common';
import { PostThumbnailComponent } from '../post-thumbnail/post-thumbnail.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tag-page',
  standalone: true,
  templateUrl: './tag-page.component.html',
  styleUrl: './tag-page.component.css',
  imports: [CommonModule, PostThumbnailComponent, RouterLink],
})
export class TagPageComponent {
  postList: PostSkeleton[];
  tag: String;
  exists: boolean;

  constructor(private route: ActivatedRoute, private postService: PostService) {
    this.postList = [];
    this.exists = true;
    this.tag = '';
    this.route.paramMap.subscribe((params) => {
      this.ngOnInit();
    });
  }

  fetchTags(): void {
    this.tag = this.route.snapshot.params['tag'];
    this.postService.getPostsByTag(this.tag).subscribe((data) => {
      if (data.length == 0) {
        this.exists = false;
      } else {
        this.postList = data;
      }
    });
  }

  ngOnInit(): void {
    this.fetchTags();
  }
}
