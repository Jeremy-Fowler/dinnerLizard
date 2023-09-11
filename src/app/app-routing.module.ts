import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';

const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomePageComponent
  },
  {
    path: 'restaurants/:id',
    title: 'Restaurant',
    component: RestaurantPageComponent
  },
  {
    path: 'cart',
    title: 'Cart',
    component: CartPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
