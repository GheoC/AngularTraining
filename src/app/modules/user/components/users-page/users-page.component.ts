import {Component, OnInit} from '@angular/core';
import {FavoriteService} from 'src/app/modules/shared/services/favorite.service';
import {User} from '../../models/User';
import {UsersService} from '../../services/users.service';
import {EntityType} from "../../../shared/enums/EntityType";

@Component({
  selector: 'app-users',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  users: User[] = [];
  favorites: User[] = [];
  favoriteIds: number[] = [];

  constructor(private userService: UsersService, private favoriteService: FavoriteService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    console.log(this.users);
    this.favoriteIds = this.favoriteService.getFavoriteIdsByType(EntityType.User);
    this.favorites = this.userService.populateFavorites();
  }

  toggleUserInFavorites(user: User) {
    this.favoriteService.toggleFavoriteId(EntityType.User, user.id!);
    this.favorites = this.userService.populateFavorites();
  }
}
