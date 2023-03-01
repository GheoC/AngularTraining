import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteCarComponent } from './components/favorite-car/favorite-car.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FavoriteCarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    FavoriteCarComponent
  ]
})
export class CarModule { }
