import { Injectable } from '@angular/core';
import { Article } from './models/object.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ArticleService {
  articles: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.articles = database.list('allArticles');
  }

  getArticle() {
    return this.articles;
  }
  getArticleById(ArticleId: string){
    return this.database.object('allArticles/' + ArticleId);
  }

}
