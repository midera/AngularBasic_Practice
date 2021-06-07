import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import {PostService} from "./components/services";
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentComponent } from './components/comment/comment.component';


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    CommentListComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ],
  providers: [PostService]
})
export class PostModule { }
