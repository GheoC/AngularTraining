import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteCarComponent } from './modules/car/components/favorite-car/favorite-car.component';
import { UsersComponent } from './modules/user/components/users/users.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent },
  {path: 'cars', component: FavoriteCarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
