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


@NgModule({
  declarations: [
    UsersComponent,
    UserCardComponent,
    UserTitleComponent,
    UsersListViewComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    SharedModule
  ],
  exports:[
    UsersComponent
  ]
})
export class UserModule { }
