import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ShopService } from '../shop.service';
import { Router } from '@angular/router';
// import { Shop } from '../models/shop.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers: [ShopService]
})
export class ShopComponent implements OnInit {
  shoppingItems: FirebaseListObservable<any[]>;

  constructor(private router: Router,
              private shopService: ShopService) { }

  ngOnInit() {
    this.shoppingItems = this.shopService.getItemsForSale();
  }
  itemForSale(clickedItem){
    this.router.navigate(['shop-item', clickedItem.$key])
  }

}
