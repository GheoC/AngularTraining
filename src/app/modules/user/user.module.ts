import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { UserTitleComponent } from './components/user-title/user-title.component';
import { SharedModule } from '../shared/shared.module';
import { UsersListViewComponent } from './components/users-list-view/users-list-view.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AddUserFormComponent } from './components/add-user-form/add-user-form.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserCardComponent,
    UserTitleComponent,
    UsersListViewComponent,
    AddUserComponent,
    AddUserFormComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports:[
    UsersComponent,
    AddUserComponent,
  ]
})
export class UserModule { }
