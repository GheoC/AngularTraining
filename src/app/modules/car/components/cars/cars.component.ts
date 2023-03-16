import {Component, OnInit} from '@angular/core';
import {FavoriteService} from 'src/app/modules/shared/services/favorite.service';
import {Car} from '../../models/Car';
import {CarsService} from '../../services/cars.service';
import {EntityType} from "../../../shared/enums/EntityType";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  constructor(private carsService: CarsService, private favoriteService: FavoriteService) {}
  cars: Car[] = [];
  favorites: Car[] = [];
  favoriteIds: number[] = [];

  ngOnInit(): void {
    debugger;
    this.cars = this.carsService.getCars();
    console.log(this.cars);
    this.favoriteIds = this.favoriteService.getFavoriteIdsByType(EntityType.Car);
    this.favorites = this.populateFavorites();
  }

  toggleCarInFavorites(car: Car): void {
    if (car.id != null) {
      this.favoriteService.toggleFavoriteId(EntityType.Car, car.id);
    }
    this.favorites = this.populateFavorites();
  }

  populateFavorites(): Car[] {
    return this.favoriteIds.map((id: number) => {
      return this.cars.find((car: Car) => car.id === id)!
    });
  }
}
