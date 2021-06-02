import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from "./component/app/app.component";
import {BrowserModule} from "@angular/platform-browser";
import {AboutComponent} from './component/about/about.component';
import {HomeComponent} from './component/home/home.component';
import {RouterModule, Routes} from "@angular/router";
import {PostResolveService} from "./module/post/components/services/post-resolve.service";
import {UserResolveService} from "./module/user/components/services/user-resolve.service";

let routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {
    path: 'users', loadChildren: () => import('./module/user/user.module').then(m => m.UserModule),
    resolve: {allUsers: UserResolveService}
  },
  {
    path: 'posts', loadChildren: () => import('./module/post/post.module').then(m => m.PostModule),
    resolve: {allPosts: PostResolveService}
  }
]



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
