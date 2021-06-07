import {Component, Input} from '@angular/core';
import {Post} from "../../../../models/Post";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  {


  @Input()
  post: Post;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  showComments(): void {
    this.router.navigate([this.post.id], {relativeTo: this.activatedRoute});
  }

}
