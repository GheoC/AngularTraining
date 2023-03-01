import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  users: User[] = [
    {
      id: 1,
      name:'John Smith',
      age: 17,
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
      age: 14,
      isActivated: true
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
    },
    {
      id: 6,
      name: 'Bob Smith',
      age: 30,
      isActivated: true
    },
    {
      id: 7,
      name: 'Mike Smith',
      age: 31,
      isActivated: true
    },
    {
      id: 8,
      name: 'Jim Smith',
      age: 37,
      isActivated: true
    },
    {
      id: 9,
      name: 'Jane Smith',
      age: 41,
      isActivated: false
    }
  ]

  getUsers(){
    return this.users
  }
}
