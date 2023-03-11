import { Injectable } from '@angular/core';
import { User } from '../models/User';
import data from './users.json'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  private users: User[] = data as User[];

  getUsers(){
    return this.users
  }
}
