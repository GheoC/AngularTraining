import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './modules/car/components/cars/cars.component';
import { FavoriteCarComponent } from './modules/car/components/favorite-car/favorite-car.component';
import { UsersComponent } from './modules/user/components/users/users.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent },
  {path: 'cars', component: CarsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
