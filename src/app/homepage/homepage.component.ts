import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from '@angularfire2/database';
import { Router } from '@angular/router';
// import { Article } from '../models/object.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [ArticleService]
})

export class HomepageComponent implements OnInit {

  constructor(private router: Router,
              private articleService: ArticleService) { }

  ngOnInit(){
    this.articles = this.articleService.getArticle();
  }

  viewClickedArticle(readFullArticle: Article) {
  // console.log(readFullArticle.description);
  this.router.navigate('article', readFullArticle.id);
 };

}
