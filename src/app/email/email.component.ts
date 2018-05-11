import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  providers: [ArticleService]
})
export class EmailComponent implements OnInit {

  constructor(private router: Router, private albumService: ArticleService) { }

  submitForm(userInput){
    if (userInput === true){
      document.getElementById("errorResponse").innerHTML = "Thank you!";
    }
    else {
      document.getElementById("successResponse").innerHTML = "You have entered an invalid email address. Please try again.";
    }
  }



  ngOnInit() {
  }

}
