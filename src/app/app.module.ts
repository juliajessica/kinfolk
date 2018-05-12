import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
// import { shoppingFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ArticleComponent } from './article/article.component';
import { EmailComponent } from './email/email.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShopComponent } from './shop/shop.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

// export const shopFirebaseConfig = {
//   apiKey: shoppingFirebaseConfig.apiKey,
//   authDomain: shoppingFirebaseConfig.authDomain,
//   databaseURL: shoppingFirebaseConfig.databaseURL,
//   storageBucket: shoppingFirebaseConfig.storageBucket
// };

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ArticleComponent,
    EmailComponent,
    NavbarComponent,
    ShopComponent,
    ShoppingItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireModule.initializeApp(shopFirebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
