import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from '../../models/Car';

@Component({
  selector: 'app-cars-list-view',
  templateUrl: './cars-list-view.component.html',
  styleUrls: ['./cars-list-view.component.scss']
})
export class CarsListViewComponent {

  @Input() cars: Car[] = [];
  @Input() favoriteIDs: number[] = [];
  @Input() isButtonDisabled: boolean = false;
  @Output() favorite = new EventEmitter<Car>();

  toggleFavorite(car: Car) {
    this.favorite.emit(car);
  }

  isCarInFavorites(id: number): boolean {
    return this.favoriteIDs.includes(id);
  }
}
