import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user/user.component';
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./components/services";
import { UserPostComponent } from './components/user-post/user-post.component';
import { PostListComponent } from './components/post-list/post-list.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserPostComponent,
    PostListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers: [UserService]
})
export class UserModule { }
