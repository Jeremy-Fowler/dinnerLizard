import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../interfaces/Restaurant';
import { ActivatedRoute } from '@angular/router';
import { AppStateService } from '../app-state.service';
import { FoodItem } from '../interfaces/FoodItem';

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.css']
})
export class RestaurantPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private AppState: AppStateService) { }
  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    // const foundRestaurant = this.AppState.restaurants.find(r => r.id == parseInt(id));
    // if (!foundRestaurant) throw new Error(`Invalid id: ${id}`)
    this.restaurant = this.AppState.restaurants.find(r => r.id == id)!;
    this.foodItems = this.AppState.foodItems.filter(item => item.restaurantId == id)
  }

  restaurant!: Restaurant;
  foodItems!: FoodItem[];

}