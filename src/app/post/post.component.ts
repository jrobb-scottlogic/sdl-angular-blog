import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    // console.log("id",id);

    this.post = this.postService!.getPostById(id);
    // console.log("post",this.post);


  }
  // constructor() {
  //   // const id = 1;
  //   this.post = this.postService!.getPostById(id);
  // }
  constructor(private route : ActivatedRoute){}
}
