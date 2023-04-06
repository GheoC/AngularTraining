import {Component, OnDestroy, OnInit} from '@angular/core';
import {FavoriteService} from 'src/app/modules/shared/services/favorite.service';
import {Car} from '../../models/Car';
import {CarsService} from '../../services/cars.service';
import {EntityType} from "../../../shared/enums/EntityType";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit, OnDestroy {

  cars: Car[] = [];
  favorites: Car[] = [];
  favoriteIds: number[] = [];
  isLoading: boolean = false;
  carsSubscription!: Subscription;

  constructor(private carsService: CarsService, private favoriteService: FavoriteService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.carsSubscription = this.carsService.getCars().subscribe(value => {
      this.isLoading = false;
      this.cars = value;
    });
    this.favoriteIds = this.favoriteService.getFavoriteIdsByType(EntityType.Car);
    this.favorites = this.carsService.populateFavorites();
  }

  toggleCarInFavorites(car: Car): void {
    this.favoriteService.toggleFavoriteId(EntityType.Car, car.id);
    this.favorites = this.carsService.populateFavorites();
  }

  ngOnDestroy(): void {
    this.carsSubscription.unsubscribe();
  }
}
