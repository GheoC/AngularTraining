import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './modules/car/components/cars/cars.component';
import { UsersPageComponent } from './modules/user/components/users-page/users-page.component';
import {AddUserPageComponent} from "./modules/user/components/add-user-page/add-user-page.component";
import {EditUserPageComponent} from "./modules/user/components/edit-user-page/edit-user-page.component";

const routes: Routes = [
  {path: 'users', component: UsersPageComponent },
  {path: 'users/new-user', component: AddUserPageComponent},
  {path: 'users/edit/:id', component: EditUserPageComponent},
  {path: 'cars', component: CarsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
