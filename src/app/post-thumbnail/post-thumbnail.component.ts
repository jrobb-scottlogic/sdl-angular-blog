import { Component, Input } from '@angular/core';
import { PostSkeleton } from '../post-skeleton';
import { CommonModule } from '@angular/common';
import { TagComponent } from '../tag/tag.component';
@Component({
  selector: 'app-post-thumbnail',
  standalone: true,
  imports: [CommonModule, TagComponent],
  templateUrl: './post-thumbnail.component.html',
  styleUrl: './post-thumbnail.component.css',
})
export class PostThumbnailComponent {
  @Input() postSkeleton!: PostSkeleton;
}
