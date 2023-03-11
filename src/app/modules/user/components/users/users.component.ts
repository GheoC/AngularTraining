import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {FavoriteService} from 'src/app/modules/shared/services/favorite.service';
import {User} from '../../models/User';
import {UsersService} from '../../services/users.service';
import {UserCardComponent} from '../user-card/user-card.component';
import {UserTitleComponent} from '../user-title/user-title.component';
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

  @ViewChild(UserTitleComponent, {static: true}) userTitle?: UserTitleComponent;
  @ViewChildren(UserCardComponent) userCardComponents?: QueryList<UserCardComponent>

  constructor(private userService: UsersService, private favoriteService: FavoriteService) {
  }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.favoriteIds = this.favoriteService.getFavoriteIdsByType(EntityType.User);
    this.populateFavorites();
  }

  toggleUserInFavorites(user: User) {
    if (user.id != null) {
      this.favoriteService.toggleIdInFavoritesStore(EntityType.User, user.id);
    }
    this.populateFavorites();
  }

  populateFavorites(): void {
    let newFavorites: User[] = [];
    this.favoriteIds.forEach(id => {
      let foundUser = this.findUserById(id);
      if (foundUser !== undefined) {
        newFavorites.push(foundUser);
      }
    })
    this.favorites = [...newFavorites];
  }

  findUserById(id: number): User | undefined {
    return this.users.find(u => {
      return u.id === id;
    });
  }
}
