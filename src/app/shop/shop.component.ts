import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers: [ArticleService]
})
export class ShopComponent implements OnInit {

  constructor(private router: Router,
              private articleService: ArticleService) { }

  ngOnInit() {
  }

}
