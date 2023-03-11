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

  toggleIdInFavoritesStore(type: EntityType, id: number): void {
    if (this.favoritesStore[type].includes(id)){
      this.favoritesStore[type].splice(this.favoritesStore[type].indexOf(id), 1);
    } else {
      this.favoritesStore[type].push(id);
    }
  }

  isEntityInFavorites(id: number, type: EntityType): boolean{
    return this.favoritesStore[type].includes(id);
  }
}
