import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-favorite-car',
  templateUrl: './favorite-car.component.html',
  styleUrls: ['./favorite-car.component.css']
})
export class FavoriteCarComponent {

  favoriteCar: String = "Audi";

  changeFavoriteCar(event: Event) {
    this.favoriteCar = (event.target as HTMLInputElement).value;
  }

}
