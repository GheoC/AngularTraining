import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../../models/User";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {

  @Input() user!: User;
  @Input() isFavorite!: boolean;
  @Input() isButtonDisabled: boolean = false;
  @Output() favoriteToggle = new EventEmitter<User>();

  toggleUserInFavorite(user: User) {
    this.favoriteToggle.emit(user);
  }
}
