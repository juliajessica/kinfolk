import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../models/object.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  // @Input() childSelectedArticle: Article;
  @Output() clickedLogo = new EventEmitter();

  childSelectedArticle = null;

  redirectToHomepage(){
    this.clickedLogo.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
