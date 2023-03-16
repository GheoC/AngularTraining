import { Injectable } from '@angular/core';
import { User } from '../models/User';
import data from './users.json'
import {TGender} from "../models/TGender";

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

  addUser(formUser: User): void {
    let newUser: User = {
        firstName: formUser.firstName,
        lastName: formUser.lastName,
        email: formUser.email!,
        age: formUser.age!,
        company: formUser.company!,
        department: formUser.department!,
        gender: formUser.gender! as TGender,
        imageUrl: formUser.imageUrl!
      }
    newUser.id = this.getNextId();
    this.users.push(newUser);
  }
}
