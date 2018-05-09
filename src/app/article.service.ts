import { Injectable } from '@angular/core';
import { Article } from './models/object.model';

@Injectable()
export class ArticleService {

  constructor() { }

  getArticle() {
    return Article;
  }
  getArticleById(articleId: number){
    for (var i = 0; i <= Article.length - 1; i++) {
      if (Article[i].id === articleId) {
        return Article[i];
      }
    }
  }


}
