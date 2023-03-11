import {EntityType} from "../enums/EntityType";

export type FavoritesStore = {
  [key in EntityType]: number[];
};
