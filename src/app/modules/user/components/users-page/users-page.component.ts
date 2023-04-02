import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FavoriteService} from 'src/app/modules/shared/services/favorite.service';
import {User} from '../../models/User';
import {UsersService} from '../../services/users.service';
import {EntityType} from "../../../shared/enums/EntityType";
import {FormGroup} from "@angular/forms";
import {debounceTime, distinctUntilChanged} from "rxjs";
import {UserSearchParams} from "../../models/UserSearchParams";

@Component({
  selector: 'app-users',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit, AfterViewInit {

  users: User[] = [];
  favorites: User[] = [];
  favoriteIds: number[] = [];
  form = new FormGroup({});

  constructor(private userService: UsersService, private favoriteService: FavoriteService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((value: User[]) => this.users = value);
    this.favoriteIds = this.favoriteService.getFavoriteIdsByType(EntityType.User);
    this.favorites = this.userService.populateFavorites();
    console.log(this.form);
  }

  ngAfterViewInit(): void {
    this.form.get('searchForm')!.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged((a: UserSearchParams, b: UserSearchParams) => a.firstName === b.firstName && a.lastName === b.lastName),
      )
      .subscribe((value: UserSearchParams) => this.users = this.userService.getSearchedUsers(value))
  }

  toggleUserInFavorites(user: User) {
    this.favoriteService.toggleFavoriteId(EntityType.User, user.id!);
    this.favorites = this.userService.populateFavorites();
  }

  registerSubForm(subForm: FormGroup, key: string): void {
    this.form.addControl(key, subForm)
  }
}
