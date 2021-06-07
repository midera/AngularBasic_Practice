import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Post} from "../../../../models";
import {UserService} from "../services";

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {

  postsList: Post[];

  constructor(private activatedRoute: ActivatedRoute, private usersService: UserService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      this.usersService.getUserPost(value.id).subscribe(data => this.postsList = data);
    })
  }

}
