import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../../models/User';
import {FavoriteService} from "../../../shared/services/favorite.service";
import {EntityType} from "../../../shared/enums/EntityType";

@Component({
  selector: 'app-users-list-view',
  templateUrl: './users-list-view.component.html',
  styleUrls: ['./users-list-view.component.scss']
})
export class UsersListViewComponent {

  @Input() users: User[] = [];
  @Input() favorites: User[] = [];
  @Output() favorite = new EventEmitter<User>();

  constructor(private favoriteService: FavoriteService){}

  toggleUserInFavorite(user: User){
    this.favorite.emit(user);
  }

  isUserInFavorites(id: number): boolean {
    return this.favoriteService.isEntityInFavorites(id, EntityType.User);
  }
}
