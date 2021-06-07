import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../../../../models";
import {UserService} from "./user.service";
import {Resolve} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<User[]> {

  constructor(private usersService: UserService) {
  }

  resolve(): Observable<User[]> {
    return this.usersService.getUsers();
  }
}
