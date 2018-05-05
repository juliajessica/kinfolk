// import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Article } from '../models/object.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  // @Input() childArticleList: Article[];
  // @Output() clickFullArticle = new EventEmitter();
  articles: Article[] = [
    new Article('Studio David Thulstrup', 'The Danish designer behind Noma’s new interiors.', 'https://kinfolk.com/wp-content/uploads/2018/04/Kinfolk_StudioDavidThulstrup_009-683x1024.jpg'),
    new Article('Métro, Boulot, Disco', 'The enduring appeal of Nouvelle Vague.', 'https://kinfolk.com/wp-content/uploads/2018/02/Metro_Boulet_Disco_01-768x1024.jpg'),
    new Article('Septime', 'A Parisian restaurant serving up haute-cuisine without the pretention.','https://kinfolk.com/wp-content/uploads/2018/04/Kinfolk_ParisCityGuide_Septime_002-683x1024.jpg'),
    new Article('Michaela DePrince', 'The young ballerina dancing all over the stereotypes of a pressure-intense career.', 'https://kinfolk.com/wp-content/uploads/2018/02/Michaela_DePrince_01-822x1024.jpg'),
    new Article('The Photographer in the Garden', 'Gardens have provided powerful inspiration for Man Ray, Mapplethorpe and a million hobby photographers.', 'https://kinfolk.com/wp-content/uploads/2018/04/The_Photographer_in_the_Garden_04-851x1024.jpg'),
    new Article('13 Bonaparte', 'Prize-winning photographer Allyssa Heuze on her collaboration with 13 Bonaparte.', 'https://kinfolk.com/wp-content/uploads/2018/05/13-Bonaparte-Le-Denim-2018-03-819x1024.jpg'),
    new Article('Jamieson Webster', 'A conversation with a New York psychoanalyst.', 'https://kinfolk.com/wp-content/uploads/2018/01/Jamieson_Webster-819x1024.jpg'),
    new Article('Red Heads', 'Red hair don’t care: Celebrating the beauty of the ginger gene.', 'https://kinfolk.com/wp-content/uploads/2018/01/Red_Heads_01-683x1024.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
