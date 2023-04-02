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
    console.log(this.cars);
    this.favoriteIds = this.favoriteService.getFavoriteIdsByType(EntityType.Car);
    this.favorites = this.carsService.populateFavorites();
  }

  toggleCarInFavorites(car: Car): void {
    this.favoriteService.toggleFavoriteId(EntityType.Car, car.id);
    this.favorites = this.carsService.populateFavorites();
  }
}
