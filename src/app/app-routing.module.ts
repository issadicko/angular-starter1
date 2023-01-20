import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SiteLayoutComponent} from "./site/site-layout/site-layout.component";
import {HomePageComponent} from "./site/home-page/home-page.component";
import {AboutComponent} from "./site/about/about.component";
import {PostsListingComponent} from "./site/posts-listing/posts-listing.component";

const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'posts',
        component: PostsListingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
