import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './modules/car/components/cars/cars.component';
import { UsersComponent } from './modules/user/components/users/users.component';
import {AddUserComponent} from "./modules/user/components/add-user/add-user.component";

const routes: Routes = [
  {path: 'users', component: UsersComponent },
  {path: 'users/new-user', component: AddUserComponent},
  {path: 'cars', component: CarsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
