import {Component, OnDestroy, OnInit} from '@angular/core';
import {FavoriteService} from 'src/app/modules/shared/services/favorite.service';
import {User} from '../../models/User';
import {UsersService} from '../../services/users.service';
import {EntityType} from "../../../shared/enums/EntityType";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-users',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit, OnDestroy {

  users: User[] = [];
  favorites: User[] = [];
  favoriteIds: number[] = [];
  isLoading: boolean = false;
  usersSubscription!: Subscription;
  searchSubscription!: Subscription;

  constructor(private userService: UsersService, private favoriteService: FavoriteService) {
  }

  ngOnInit(): void {
    this.isLoading = true
    this.usersSubscription = this.userService.getUsers().subscribe((value: User[]) => {
      this.isLoading = false;
      this.users = value;
    });
    this.favoriteIds = this.favoriteService.getFavoriteIdsByType(EntityType.User);
    this.favorites = this.userService.populateFavorites();
  }

  toggleUserInFavorites(user: User) {
    this.favoriteService.toggleFavoriteId(EntityType.User, user.id!);
    this.favorites = this.userService.populateFavorites();
  }

  criteriaChanged(value: string){
    this.isLoading = true;
    this.searchSubscription = this.userService.searchUsersByName(value).subscribe(value =>
    {
      this.isLoading = false;
      this.users = value;
    });
  }

  ngOnDestroy(): void {
     this.usersSubscription.unsubscribe();
     //small problem here
     // this.searchSubscription.unsubscribe();
  }
}
