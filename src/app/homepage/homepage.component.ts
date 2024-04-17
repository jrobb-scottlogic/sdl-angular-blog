import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentPostsComponent } from '../recent-posts/recent-posts.component';
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RecentPostsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {}
