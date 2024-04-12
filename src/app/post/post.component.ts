import { Component, Input } from '@angular/core';
import { PostSkeleton } from '../post-skeleton';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  @Input() postSkeleton!: PostSkeleton;
}
