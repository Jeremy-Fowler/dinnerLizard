import { Component, OnInit } from '@angular/core';
import { AppStateService } from '../app-state.service';
import { FoodItem } from '../interfaces/FoodItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  constructor(private AppState: AppStateService) { }

  cartItems: FoodItem[] = this.AppState.cartItems;

  ngOnInit(): void {
    this.AppState.cartItems.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }

  get total(): number {
    let total = 0
    this.AppState.cartItems.forEach(item => total += item.price)
    return total
  }
}
