import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users-list-view',
  templateUrl: './users-list-view.component.html',
  styleUrls: ['./users-list-view.component.scss']
})
export class UsersListViewComponent {

  @Input() users: User[] = [];
  @Input() favorites: User[] = [];
  @Output() favorite = new EventEmitter<User>

  addFavorite(user: User){
    console.log(user);
    this.favorite.emit(user);
  }
}
