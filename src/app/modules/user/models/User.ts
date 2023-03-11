import { TGenre } from "./TGenre";

export interface User {
    id: number;
    name: string;
    age: number;
    gender: TGenre;
    department: string;
    company: string;
    imageUrl: string;
}
