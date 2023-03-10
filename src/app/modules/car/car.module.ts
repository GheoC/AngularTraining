import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteCarComponent } from './components/favorite-car/favorite-car.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CarsComponent } from './components/cars/cars.component';
import { CarsListViewComponent } from './components/cars-list-view/cars-list-view.component';

@NgModule({
  declarations: [
    FavoriteCarComponent,
    CarsComponent,
    CarsListViewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  exports:[
    FavoriteCarComponent
  ]
})
export class CarModule { }
