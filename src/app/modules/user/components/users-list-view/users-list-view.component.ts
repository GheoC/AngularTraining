import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-users-list-view',
  templateUrl: './users-list-view.component.html',
  styleUrls: ['./users-list-view.component.scss']
})
export class UsersListViewComponent {

  @Input() users: User[] = [];
  @Input() favoriteIDs: number[] = []
  @Input() isButtonDisabled: boolean = false;
  @Output() favorite = new EventEmitter<User>();

  toggleUserInFavorite(user: User){
    this.favorite.emit(user);
  }

  isUserInFavorites(id: number): boolean {
    return this.favoriteIDs.includes(id);
  }
}
