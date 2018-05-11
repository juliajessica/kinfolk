import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
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

// $(window).scroll(function () {
//   let winTop = $(this).scrollTop(),
//     winBottom = winTop + $(this).height(),
//     left = $('#paris-article'),
//     leftBottom = left.height();//when the user reached the bottom of '#leftShort' set its position to fixed to prevent it from moving on scroll
//   if (winBottom >= leftBottom) {
//     left.css({
//       'position': 'fixed',
//       'bottom': '0px'
//   });
//   } else {//when the user scrolls back up revert its position to relative
//     left.css({
//     'position': 'relative',
//     'bottom': 'auto'
//     });
//   }
// });

}
