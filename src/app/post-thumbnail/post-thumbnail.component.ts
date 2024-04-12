import { Component, Input } from '@angular/core';
import { PostSkeleton } from '../post-skeleton';

@Component({
  selector: 'app-post-thumbnail',
  standalone: true,
  imports: [],
  templateUrl: './post-thumbnail.component.html',
  styleUrl: './post-thumbnail.component.css',
})
export class PostThumbnailComponent {
  @Input() postSkeleton!: PostSkeleton;
}
