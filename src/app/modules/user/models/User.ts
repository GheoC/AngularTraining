import { TGender } from "./TGender";

export interface User {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    gender: TGender;
    department: string;
    company: string;
    imageUrl: string;
}
