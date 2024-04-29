import { Component, Input } from '@angular/core';
import { PostSkeleton } from '../post-skeleton';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-featured-story',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './featured-story.component.html',
  styleUrl: './featured-story.component.css',
})
export class FeaturedStoryComponent {
  @Input() featuredPost: PostSkeleton | undefined;
}
