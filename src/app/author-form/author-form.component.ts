import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthorFormSkeleton } from '../author-form-skeleton';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-author-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './author-form.component.html',
  styleUrl: './author-form.component.css',
})
export class AuthorFormComponent {
  authorForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
  });

  @Output() values = new EventEmitter<AuthorFormSkeleton>();

  output: AuthorFormSkeleton = { title: '', body: '' };

  onSubmit() {
    this.output.body = this.authorForm.value.body!;
    this.output.title = this.authorForm.value.title!;
    this.values.emit(this.output);
    this.authorForm.reset();
  }
}
