import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../models/object.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() childSelectedArticle: Article;
  @Output() clickedDone = new EventEmitter();

  finishedReading(){
    this.clickedDone.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
