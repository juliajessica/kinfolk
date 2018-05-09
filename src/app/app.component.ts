import { Component, OnInit } from '@angular/core';
import { Article } from './models/object.model';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // selectedArticle = null;
  //
  // viewArticle(clickedTitle){
  //   console.log(clickedTitle.description);
  //   this.selectedArticle = clickedTitle;
  // }

  constructor() { }

  ngOnInit() {
  }
}
