import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PostComponent } from './post/post.component';
import { AuthorPageComponent } from './author-page/author-page.component';

export const routes: Routes = [
  { path: 'article/:id', component: PostComponent },
  { path: '', component: HomepageComponent },
  { path: 'author', component: AuthorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class app {}
