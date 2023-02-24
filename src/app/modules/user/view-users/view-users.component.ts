import { Component } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent {
  showInactive: boolean = true

  users: User[] = [
    {
      id: 1,
      name:'John Smith',
      age: 28,
      isActivated: true
    },
    {
      id: 2,
      name:'Will Smith',
      age: 33,
      isActivated: false
    },
    {
      id: 3,
      name: 'Bill Smith',
      age: 37,
      isActivated: false
    },
    {
      id: 4,
      name: 'Mike Smith',
      age: 40,
      isActivated: true
    },
    {
      id: 5,
      name: 'Sam Smith',
      age: 21,
      isActivated: false
    }
  ]

  toggleShowInactive(){
    this.showInactive = !this.showInactive;
  }

  toggleUserStatus(user:User){
    user.isActivated = !user.isActivated;
  }

}
