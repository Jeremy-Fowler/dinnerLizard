import { Injectable } from '@angular/core';
import { FoodItem } from './interfaces/FoodItem';
import { AppStateService } from './app-state.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  removeItemFromCart(foodItem: FoodItem) {
    const index = this.AppState.cartItems.findIndex(item => item == foodItem)
    if (index == -1) throw new Error("Item not found")
    this.AppState.cartItems.splice(index, 1)
  }
  constructor(private AppState: AppStateService) { }
  addItemToCart(foodItem: FoodItem) {
    this.AppState.cartItems.push(foodItem)
  }

}
