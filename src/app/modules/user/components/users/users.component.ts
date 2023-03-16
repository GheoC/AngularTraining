import {Component, OnInit} from '@angular/core';
import {FavoriteService} from 'src/app/modules/shared/services/favorite.service';
import {User} from '../../models/User';
import {UsersService} from '../../services/users.service';
import {EntityType} from "../../../shared/enums/EntityType";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  favorites: User[] = [];
  favoriteIds: number[] = [];

  constructor(private userService: UsersService, private favoriteService: FavoriteService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.favoriteIds = this.favoriteService.getFavoriteIdsByType(EntityType.User);
    this.favorites = this.populateFavorites();
  }

  toggleUserInFavorites(user: User) {
    if (user.id != null) {
      this.favoriteService.toggleFavoriteId(EntityType.User, user.id);
    }
    this.favorites = this.populateFavorites();
  }

  populateFavorites(): User[] {
    return this.favoriteIds.map((id: number) => {
      return this.users.find((user: User) => user.id! === id)!
    });
  }
}
