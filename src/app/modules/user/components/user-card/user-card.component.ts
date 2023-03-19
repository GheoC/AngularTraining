import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../../models/User";

export const USER_DEFAULT_IMAGE = 'https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg';

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

  USER_DEFAULT_IMAGE = USER_DEFAULT_IMAGE;

  toggleUserInFavorite(user: User) {
    this.favoriteToggle.emit(user);
  }
}
