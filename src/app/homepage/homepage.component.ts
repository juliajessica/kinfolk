import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
import { Article } from '../models/object.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  @Input() childArticleList: Article[];
  @Output() clickFullArticle = new EventEmitter();

  viewClickedArticle(readFullArticle: Article) {
  console.log(beerToEdit.brandName);
  this.clickFullArticle.emit(readFullArticle);
}

  constructor() { }

  ngOnInit() {
  }

}
