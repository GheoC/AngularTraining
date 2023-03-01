import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {

  @Input() user!: User;
  @Input() showInactive!: boolean
  @Output() selectedUser = new EventEmitter<User>

  toggleUserStatus(user: User) {
    if (!(user.isActivated === false || user.age < 18)) {
      this.selectedUser.emit(user);
    }
  }
}
