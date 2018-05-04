import { Component, OnInit } from '@angular/core';
import { Kinfolk } from './models/object.models';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  @Input() childArticleList: Article[];
  constructor() { }

  ngOnInit() {
  }

}
