import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPageComponent } from './components/users-page/users-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { UserTitleComponent } from './components/user-title/user-title.component';
import { SharedModule } from '../shared/shared.module';
import { UsersListViewComponent } from './components/users-list-view/users-list-view.component';
import { AddUserPageComponent } from './components/add-user-page/add-user-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AddUserFormComponent } from './components/add-user-form/add-user-form.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddAddressFormComponent } from './components/add-address-form/add-address-form.component';
import { EditUserPageComponent } from './components/edit-user-page/edit-user-page.component';
import {RouterLink} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    UsersPageComponent,
    UserTitleComponent,
    UsersListViewComponent,
    AddUserPageComponent,
    AddUserFormComponent,
    UserCardComponent,
    AddAddressFormComponent,
    EditUserPageComponent,
  ],
    imports: [
        CommonModule,
        MatCardModule,
        MatDividerModule,
        MatButtonModule,
        SharedModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        RouterLink,
        MatIconModule,
    ],
  exports:[
    UsersPageComponent,
    AddUserPageComponent,
  ]
})
export class UserModule { }
