import { Component, OnInit } from '@angular/core';
import {Comment} from "../../@core/modele/app.model";
import {COMMENTS} from "../../@core/data/comments";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  comments: Comment[] = [];

  constructor() { }

  ngOnInit(): void {

    this.comments = COMMENTS;

  }

}
