import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Shop } from '../models/shop.model';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css'],
  providers: [ShopService]
})
export class ShoppingItemComponent implements OnInit {
  itemId: string;
  itemToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private shopService: ShopService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.itemId = urlParameters['id'];
    });
    this.itemToDisplay = this.shopService.findItemforSaleById(this.itemId);
    //new name for item selected
  }
}
