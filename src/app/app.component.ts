import { Component } from '@angular/core';
import { AppStateService } from './app-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private AppState: AppStateService) { }
  title = 'dinnerLizard';

  get cartCount(): number {
    return this.AppState.cartItems.length
  }

}
