import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostSkeleton } from '../post-skeleton';
import { PostService } from './../post.service';
import { TagComponent } from '../tag/tag.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, TagComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  post: PostSkeleton | undefined;
  postService: PostService = inject(PostService);

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    // console.log("id",id);

    this.postService!.getPostById(id).subscribe((data) => (this.post = data));
    // console.log("post",this.post);
  }
  // constructor() {
  //   // const id = 1;
  //   this.post = this.postService!.getPostById(id);
  // }
  constructor(private route: ActivatedRoute) {}
}
