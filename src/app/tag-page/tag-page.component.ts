import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PostSkeleton } from '../post-skeleton';
import { CommonModule } from '@angular/common';
import { PostThumbnailComponent } from '../post-thumbnail/post-thumbnail.component';

@Component({
  selector: 'app-tag-page',
  standalone: true,
  templateUrl: './tag-page.component.html',
  styleUrl: './tag-page.component.css',
  imports: [CommonModule, PostThumbnailComponent],
})
export class TagPageComponent {
  postList: PostSkeleton[];
  tag: String;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router: Router
  ) {
    this.postList = [];
    this.tag = '';
    this.route.paramMap.subscribe((params) => {
      this.ngOnInit();
    });
  }

  fetchTags(): void {
    this.tag = this.route.snapshot.params['tag'];
    this.postService.getPostsByTag(this.tag).subscribe((data) => {
      if (data.length == 0) {
        this.router.navigate(['home']);
      } else {
        this.postList = data;
      }
    });
  }

  ngOnInit(): void {
    this.fetchTags();
  }
}
