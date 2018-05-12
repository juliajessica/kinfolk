import { Injectable } from '@angular/core';
import { Shop } from './models/shop.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ShopService {
  shoppingItems: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.shoppingItems = database.list('shoppingArray');
  }

  getItemsForSale(){
    return this.shoppingItems;
  }
  findItemforSaleById(ItemId: string){
    return this.database.object('shoppingArray/' + ItemId);
  }
}
