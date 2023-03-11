import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from '../../models/Car';
import {EntityType} from "../../../shared/enums/EntityType";
import {FavoriteService} from "../../../shared/services/favorite.service";

@Component({
  selector: 'app-cars-list-view',
  templateUrl: './cars-list-view.component.html',
  styleUrls: ['./cars-list-view.component.scss']
})
export class CarsListViewComponent {

  @Input() cars: Car[] = [];
  @Input() favorites: Car[] = [];
  @Output() favorite = new EventEmitter<Car>();

  constructor(private favoriteService: FavoriteService) {}

  toggleFavorite(car: Car) {
    this.favorite.emit(car);
  }

  isUserInFavorites(id: number): boolean {
    return this.favoriteService.isEntityInFavorites(id, EntityType.Car);
  }
}
