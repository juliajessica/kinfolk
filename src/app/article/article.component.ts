import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Article } from '../models/object.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {
  articleId: number;
  displayArticle: Article;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private articleService: ArticleService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.articleId = parseInt(urlParameters['id']);
    });
    this.displayArticle = this.articleService.getArticleById(this.articleId);
  }

  // @Input() childSelectedArticle: Article;
  // @Output() clickedLogo = new EventEmitter();

  // childSelectedArticle = null;

  // redirectToHomepage(){
  //   this.clickedLogo.emit();
  // }

}
