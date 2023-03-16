import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Car} from "../../models/Car";

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent {

  @Input() car!: Car;
  @Input() isFavorite!: boolean;
  @Input() isButtonDisabled: boolean = false;
  @Output() favoriteToggle = new EventEmitter<Car>();

  toggleCarInFavorite(car: Car) {
    this.favoriteToggle.emit(car);
  }
}
