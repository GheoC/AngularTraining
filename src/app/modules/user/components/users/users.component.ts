import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
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

  showInactive: boolean = true
  users: User[] = []

  @ViewChild(UserTitleComponent, { static: true }) userTitle?: UserTitleComponent;  
  @ViewChildren(UserCardComponent) userCardComponents?: QueryList<UserCardComponent>

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  toggleShowInactive() {
    this.showInactive = !this.showInactive;
  }

  toggleUserStatus(user: User) {
    this.userTitle!.lastUserDeactivated = user.name;
    this.userTitle?.changeTitle(`User ${user.name} was deactivated`);
    user.isActivated = !user.isActivated;
  }

  deactivateAll() {
    this.users.map(u => {
      if (u.age > 18) {
        u.isActivated = false;
      }
      return u;
    })
  }

  deactivateAllFromChildToggleMethod() {
    this.userCardComponents?.forEach(uc => uc.toggleUserStatus());
    this.userTitle?.changeTitle("Every user with age above 18 was deactivated!");
  }
}
