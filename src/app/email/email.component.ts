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

  submitForm(emailStr){
  //   debugger;
  //   let email = emailStr.includes("@");
  //   console.log(email);
  //   // if (email === true){
      document.getElementById("successResponse").innerHTML = "Thank you!";
    // } else {
    //   document.getElementById("errorResponse").innerHTML = "You have entered an invalid email address. Please try again.";
    //   console.log(email);
    // }

  }
  ngOnInit() {
  }

}
