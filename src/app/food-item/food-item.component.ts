import { Component, Inject, Input, OnInit } from '@angular/core';
import { FoodItem } from '../interfaces/FoodItem';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent {

  constructor(private cartService: CartService, private route: ActivatedRoute) { }

  @Input() foodItem!: FoodItem;

  routeName: string = this.route.snapshot.title!;

  addItemToCart(): void {
    this.cartService.addItemToCart(this.foodItem)
  }

  removeItemFromCart(): void {
    const wantsToDelete = window.confirm(`Are you sure you want to remove ${this.foodItem.name} from your cart?`)
    if (!wantsToDelete) return
    this.cartService.removeItemFromCart(this.foodItem)
  }
}
