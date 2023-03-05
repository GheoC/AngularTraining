import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from '../../models/Car';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-cars-list-view',
  templateUrl: './cars-list-view.component.html',
  styleUrls: ['./cars-list-view.component.scss']
})
export class CarsListViewComponent {

  @Input() cars: Car[] = [];
  @Input() favorites: Car[] = [];
  @Output() favorite = new EventEmitter<Car>;

  addFavorite(car: Car) {
    this.favorite.emit(car);
  }
}
