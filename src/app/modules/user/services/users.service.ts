import {Injectable} from '@angular/core';
import {User} from '../models/User';
import data from '../mocks/users.json'
import {TGender} from "../models/TGender";
import {FavoriteService} from "../../shared/services/favorite.service";
import {EntityType} from "../../shared/enums/EntityType";
import {UserFormValue} from "../models/UserFormValue";
import {delay, Observable, of} from "rxjs";
import {AddressesFormValue} from "../models/AddressesFormValue";
import {UserSearchParams} from "../models/UserSearchParams";

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

  getSearchedUsers(searchParams: UserSearchParams): User[] {
    let searchedUsers: User[] = [...this.users];

    if (searchParams.firstName !== '') {
      searchedUsers = searchedUsers
        .filter((u: User) => {
          return u.firstName.toLowerCase().includes(searchParams.firstName.toLowerCase())
        });
    }

    if (searchParams.lastName !== '') {
      searchedUsers = searchedUsers
        .filter((u: User) => {
          return u.lastName.toLowerCase().includes(searchParams.lastName.toLowerCase())
        });
    }
    return searchedUsers;
  }

  getNextId(): number {
    return this.users.length + 1;
  }

  addUser(formUser: UserFormValue, addressesForm: AddressesFormValue): void {
    this.formDtoToEntity(formUser, addressesForm).subscribe(value => this.users.push(value));

  }

  private formDtoToEntity(formUser: UserFormValue, addressesForm: AddressesFormValue): Observable<User> {
    let newUser: User = {
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
    return of(newUser).pipe(delay(1000));
  }

  populateFavorites(): User[] {
    return this.favoriteService.getFavoriteIdsByType(EntityType.User).map((id: number) => {
      return this.users.find((user: User) => user.id! === id)!
    });
  }

  isEmailRegistered(email: string): Observable<boolean> {
    const isExists = this.users.findIndex(u => u.email === email) !== -1;
    return of(isExists).pipe();
  }

  getUserById(id: number): Observable<User | undefined> {
    const userFound = this.users.find((u: User) => u.id == id);
    return of(userFound).pipe(delay(1000));
  }

  editUserById(id: number, formUser: UserFormValue, addressesForm: AddressesFormValue) {
    let existingUser: User;
    this.getUserById(id).subscribe(value => {
      existingUser = value!;
      existingUser!.firstName = formUser.firstName;
      existingUser!.lastName = formUser.lastName;
      existingUser!.email = formUser.email;
      existingUser!.age = formUser.age;
      existingUser!.company = formUser.company;
      existingUser!.department = formUser.department
      existingUser!.gender = formUser.gender;
      existingUser!.addresses = addressesForm.addresses;
    });
  }
}
