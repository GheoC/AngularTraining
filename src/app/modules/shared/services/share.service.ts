import { Injectable } from '@angular/core';
import { Car } from '../../car/models/Car';
import { User } from '../../user/models/User';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor() { }

  private favoriteUsers: User[] = [];
  private favoriteCars: Car[] = [];

  getFavoriteUsers() {
    return this.favoriteUsers;
  }

  getFavoriteCars() {
    return this.favoriteCars;
  }
}
