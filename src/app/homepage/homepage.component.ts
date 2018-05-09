import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from '@angularfire2/database';
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [ArticleService]
})

export class HomepageComponent implements OnInit {
  articles: FirebaseListObservable<any[]>;

  constructor(private router: Router,
              private articleService: ArticleService) { }

  ngOnInit(){
    this.articles = this.articleService.getArticle();
  }

  viewClickedArticle(readFullArticle) {
  // console.log(readFullArticle.description);
  this.router.navigate(['article', readFullArticle.$key]);
 };

}
