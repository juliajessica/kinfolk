import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { ArticleComponent } from './article/article.component';
import { EmailComponent } from './email/email.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShopComponent } from './shop/shop.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'navbar',
    component: NavbarComponent
  },
  {
    path: 'email',
    component: EmailComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'shop-item/:id',
    component: ShopComponent
  },
  {
    path: 'article/:id',
    component: ArticleComponent
  },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
