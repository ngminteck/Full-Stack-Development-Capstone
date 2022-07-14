import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './pages/post/post.component';
import { PostsComponent } from './pages/posts/posts.component';

const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'posts/all', component: PostsComponent },
  { path: 'post/:id', component: PostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
