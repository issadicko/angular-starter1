import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import {SharedModule} from "../shared/shared.module";
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { PostsListingComponent } from './posts-listing/posts-listing.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    SiteLayoutComponent,
    HomePageComponent,
    AboutComponent,
    PostsListingComponent
  ],
  exports: [
    SiteLayoutComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class SiteModule { }
