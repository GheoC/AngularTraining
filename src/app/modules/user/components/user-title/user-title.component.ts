import { Component } from '@angular/core';

@Component({
  selector: 'app-user-title',
  templateUrl: './user-title.component.html',
  styleUrls: ['./user-title.component.scss']
})
export class UserTitleComponent {

  lastUserDeactivated: string = 'No changes made yet'

  changeTitle(message: string) {
    this.lastUserDeactivated = message;
  }
}
