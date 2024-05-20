import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PostComponent } from './post/post.component';
import { AuthorPageComponent } from './author-page/author-page.component';
import { TagPageComponent } from './tag-page/tag-page.component';

export const routes: Routes = [
  { path: 'article/:id', component: PostComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'author', component: AuthorPageComponent },
  { path: 'tag/:tag', component: TagPageComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class app {}
