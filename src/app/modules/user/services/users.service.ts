import {Injectable} from '@angular/core';
import {User} from '../models/User';
import data from '../mocks/users.json'
import {TGender} from "../models/TGender";
import {FavoriteService} from "../../shared/services/favorite.service";
import {EntityType} from "../../shared/enums/EntityType";
import {UserFormValue} from "../models/UserFormValue";
import {delay, Observable, of} from "rxjs";
import {AddressesFormValue} from "../models/AddressesFormValue";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private favoriteService: FavoriteService) {
  }

  private users: User[] = data as User[];

  getUsers(): Observable<User[]> {
    return of(this.users).pipe(delay(1000));
  }

  searchUsersByName(name: string): Observable<User[]> {
    const searchedFirstName = name.split(' ')[0];
    const searchedLastName = name.split(' ')[1];
    let searchedUsers: User[] = [...this.users];

    searchedUsers = searchedUsers.filter((u: User) => {
      if (searchedLastName === undefined) {
        return (u.firstName.toLowerCase().includes(searchedFirstName.toLowerCase()) ||
               u.lastName.toLowerCase().includes(searchedFirstName.toLowerCase()));
      }
      return (u.firstName.toLowerCase().includes(searchedFirstName.toLowerCase()) && u.lastName.toLowerCase().includes(searchedLastName.toLowerCase())) ||
             (u.firstName.toLowerCase().includes(searchedLastName.toLowerCase()) && u.lastName.toLowerCase().includes(searchedFirstName.toLowerCase()));
    })

    return of(searchedUsers).pipe(delay(1000));
  }

  getNextId(): number {
    return this.users.length + 1;
  }

  addUser(formUser: UserFormValue, addressesForm: AddressesFormValue): Observable<User> {
    const newUser: User = {
      id: this.getNextId(),
      firstName: formUser.firstName,
      lastName: formUser.lastName,
      email: formUser.email,
      age: formUser.age,
      company: formUser.company,
      department: formUser.department,
      gender: formUser.gender as TGender,
      addresses: addressesForm.addresses
    }
    this.users.push(newUser);

    return of(newUser)
      .pipe(delay(1000));
  }

  populateFavorites(): User[] {
    return this.favoriteService.getFavoriteIdsByType(EntityType.User).map((id: number) => {
      return this.users.find((user: User) => user.id! === id)!
    });
  }

  isEmailRegistered(email: string): Observable<boolean> {
    const isExists = this.users.findIndex(u => u.email === email) !== -1;

    return of(isExists)
      .pipe(delay(1000));
  }

  private findUserById(id: number): User | undefined {
    return this.users.find((u: User) => u.id == id);
  }

  getUserById(id: number): Observable<User | undefined> {
    const userFound = this.findUserById(id);

    return of(userFound)
      .pipe(delay(1000));
  }

  editUserById(id: number, formUser: UserFormValue, addressesForm: AddressesFormValue): Observable<boolean> {
    const existingUser = this.findUserById(id);

    if (existingUser) {
      existingUser!.firstName = formUser.firstName;
      existingUser!.lastName = formUser.lastName;
      existingUser!.email = formUser.email;
      existingUser!.age = formUser.age;
      existingUser!.company = formUser.company;
      existingUser!.department = formUser.department
      existingUser!.gender = formUser.gender;
      existingUser!.addresses = addressesForm.addresses;
    }

    return of(true)
      .pipe(delay(3000));
  }
}
