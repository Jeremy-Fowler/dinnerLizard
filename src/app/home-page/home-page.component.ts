import { Component, OnInit } from '@angular/core';
import { AppStateService } from '../app-state.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor(private AppState: AppStateService) { }
  ngOnInit(): void {
    const foods = ['nachos', 'hamburgers', 'raviolis', 'cheese and crackers', 'sub sandwiches']
    const randomIndex = Math.floor(Math.random() * foods.length)
    this.food = foods[randomIndex]
  }

  food!: string;
  restaurants = this.AppState.restaurants

}
