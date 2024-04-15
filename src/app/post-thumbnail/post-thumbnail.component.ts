import { Component, Input } from '@angular/core';
import { PostSkeleton } from '../post-skeleton';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-post-thumbnail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-thumbnail.component.html',
  styleUrl: './post-thumbnail.component.css',
})
export class PostThumbnailComponent {
  @Input() postSkeleton!: PostSkeleton;
}
