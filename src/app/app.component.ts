import { Component } from '@angular/core';
import { Article } from './models/object.model';
import { HomepageComponent } from './homepage/homepage.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kinfolk';

  // selectedArticle = null;
  //
  // viewArticle(clickedTitle){
  //   console.log(clickedTitle.description);
  //   this.selectedArticle = clickedTitle;
  // }
}
