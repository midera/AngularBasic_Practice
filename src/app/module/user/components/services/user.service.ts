import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post, User} from "../../../../models";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url + '/users');
  }

  getUserPost(id: string): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url + '/posts?userId=' + id)
  }
}
