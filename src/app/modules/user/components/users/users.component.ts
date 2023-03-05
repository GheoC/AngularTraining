import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ShareService } from 'src/app/modules/shared/services/share.service';
import { User } from '../../models/User';
import { UsersService } from '../../services/users.service';
import { UserCardComponent } from '../user-card/user-card.component';
import { UserTitleComponent } from '../user-title/user-title.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  
  users: User[] = []
  favorites: User[] = []

  @ViewChild(UserTitleComponent, { static: true }) userTitle?: UserTitleComponent;
  @ViewChildren(UserCardComponent) userCardComponents?: QueryList<UserCardComponent>

  constructor(private userService: UsersService, private sharedService: ShareService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.favorites = this.sharedService.getFavoriteUsers();
  }

  toggleUserInFavorites(user: User) {
    console.log(user);
    debugger;
    if (this.isUserInFavorites(user)) {
      this.removeUserFromFavorites(user)
    } else {
      this.addUserToFavorites(user)
    }
    console.log(this.favorites)
  }

  addUserToFavorites(user: User) {
    debugger
    this.favorites = [...this.favorites, user]
  }

  removeUserFromFavorites(user: User) {
    debugger
    this.favorites = this.favorites.filter(favorite => favorite !== user)
  }

  isUserInFavorites(user: User): boolean {
    return this.favorites.some(u => u.id === user.id);
  }
}
