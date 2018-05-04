import { Component, OnInit } from '@angular/core';
import { Article } from '../models/object.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  // @Input() childArticleList: Article[];
  constructor() { }

  ngOnInit() {
  }

}
