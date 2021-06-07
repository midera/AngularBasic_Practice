import {Component, Input} from '@angular/core';
import {Post} from "../../../../models";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent{
@Input()
item: Post;

}
