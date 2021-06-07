import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from "./components/posts/posts.component";
import {HttpClientModule} from "@angular/common/http";
import {CommentComponent} from "./components/comment/comment.component";

const routes: Routes = [
  {
    path: '', component: PostsComponent, children: [
      {path: ':id', component: CommentComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),HttpClientModule],
  exports: [RouterModule,HttpClientModule]
})
export class PostRoutingModule { }
