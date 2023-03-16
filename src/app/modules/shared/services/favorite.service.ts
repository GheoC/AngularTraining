import { Injectable } from '@angular/core';
import {FavoritesStore} from "../models/FavoritesStore";
import {EntityType} from "../enums/EntityType";

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor() { };

  private favoritesStore: FavoritesStore = {
    [EntityType.User]: [],
    [EntityType.Car]: [],
  };

  getFavoriteIdsByType(type: EntityType): number[] {
    return this.favoritesStore[type];
  }

  toggleFavoriteId(type: EntityType, id: number): void {
    const index = this.favoritesStore[type].indexOf(id);
    if (index !== -1){
      this.favoritesStore[type].splice(index, 1);
    } else {
      this.favoritesStore[type].push(id);
    }
  }

  isEntityInFavorites(id: number, type: EntityType): boolean{
    return this.favoritesStore[type].includes(id);
  }
}
