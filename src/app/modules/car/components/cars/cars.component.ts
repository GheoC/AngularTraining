import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/modules/shared/services/share.service';
import { Car } from '../../models/Car';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  constructor(private carsService: CarsService, private sharedService: ShareService) { }

  cars: Car[] = [];
  favorites: Car[] = [];

  ngOnInit(): void {
    this.cars = this.carsService.getCars();
    this.favorites = this.sharedService.getFavoriteCars();
  }

  toggleUserInFavorites(car: Car) {
    debugger;
    console.log(car);
    if (this.isCarInFavorites(car)) {
      this.removeCarFromFavorites(car);
    } else {
      this.addCarToFavorites(car);
    }
  }

  addCarToFavorites(car: Car) {
    this.favorites = [...this.favorites, car];
  }

  removeCarFromFavorites(car: Car) {
    this.favorites = this.favorites.filter(favorite => favorite !== car);
  }

  isCarInFavorites(car: Car): boolean {
    debugger;
    return this.favorites.some(c => c.id === car.id);
  }
}
