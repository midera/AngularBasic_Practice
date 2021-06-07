import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Resolve} from "@angular/router";
import {Post} from "../../../../models";
import {PostService} from "./post.service";

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<Post[]> {

  constructor(private postsService: PostService) {
  }

  resolve(): Observable<Post[]> {
    return this.postsService.getPosts();
  }
}
