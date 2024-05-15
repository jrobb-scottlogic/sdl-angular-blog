import { Component, inject } from '@angular/core';
import { AuthorFormComponent } from '../author-form/author-form.component';
import { PostService } from '../post.service';
import { AuthorFormSkeleton } from '../author-form-skeleton';
@Component({
  selector: 'app-author-page',
  standalone: true,
  imports: [AuthorFormComponent],
  templateUrl: './author-page.component.html',
  styleUrl: './author-page.component.css',
})
export class AuthorPageComponent {
  postService: PostService = inject(PostService);

  handleSubmit(outputForm: AuthorFormSkeleton) {
    this.postService
      .addNewPost(outputForm)
      .subscribe((data) => console.log(data));
  }
}
