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
    this.cars = this.carsService.getCars();
    this.favoriteIds = this.favoriteService.getFavoriteIdsByType(EntityType.Car);
    this.populateFavorites();
  }

  toggleUserInFavorites(car: Car):void {
    if (car.id != null) {
      this.favoriteService.toggleIdInFavoritesStore(EntityType.Car, car.id);
    }
    this.populateFavorites();
  }

  populateFavorites(): void {
    let newFavorites: Car[] = [];
    this.favoriteIds.forEach(id => {
      let foundCar = this.findUserById(id);
      if (foundCar !== undefined) {
        newFavorites.push(foundCar);
      }
    })
    this.favorites = [...newFavorites];
  }

  findUserById(id: number): Car | undefined {
    return this.cars.find(car => {
      return car.id === id;
    });
  }
}
