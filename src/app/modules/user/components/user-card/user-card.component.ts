import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {

  @Input() user!: User;
  @Output() deactivate = new EventEmitter<void> 

  toggleUserStatus() {
    if (!(!this.user.isActivated || this.user.age < 18)) {
      this.deactivate.emit();
    }
  }
}
