import { Injectable } from '@angular/core';
import { User } from '../models/User';
import data from './users.json'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  private users: User[] = data as User[];

  getUsers(): User[] {
    return this.users;
  }

  getNextId(): number {
    return this.users.length + 1;
  }

  addUser(user: User): void {
    user.id = this.getNextId();
    user.imageUrl = "https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg";
    this.users.push(user);
    console.log(this.users);
  }
}
