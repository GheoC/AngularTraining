import {Injectable} from '@angular/core';
import {User} from '../models/User';
import data from '../mocks/users.json'
import {TGender} from "../models/TGender";
import {FavoriteService} from "../../shared/services/favorite.service";
import {EntityType} from "../../shared/enums/EntityType";
import {UserFormValue} from "../models/UserFormValue";
import {Observable, of} from "rxjs";
import {AddressesFormValue} from "../models/AddressesFormValue";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private favoriteService: FavoriteService) {
  }

  private users: User[] = data as User[];

  getUsers(): User[] {
    return this.users;
  }

  getNextId(): number {
    return this.users.length + 1;
  }

  addUser(formUser: UserFormValue, addressesForm: AddressesFormValue): void {
    let newUser = this.formDtoToEntity(formUser, addressesForm);
    this.users.push(newUser);
  }

  private formDtoToEntity(formUser: UserFormValue, addressesForm: AddressesFormValue) {
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
    return newUser;
  }

  populateFavorites(): User[] {
    return this.favoriteService.getFavoriteIdsByType(EntityType.User).map((id: number) => {
      return this.users.find((user: User) => user.id! === id)!
    });
  }

  isEmailRegistered(email: string): Observable<boolean> {
    const isExists = this.users.findIndex(u=> u.email === email) !== -1;
    return of(isExists).pipe();
  }

  getUserById(id: number): User | undefined {
    return this.users.find((u:User)=> u.id == id);
  }

  editUserById(id: number, formUser: UserFormValue, addressesForm: AddressesFormValue){
    const existingUser = this.getUserById(id);
    existingUser!.firstName = formUser.firstName;
    existingUser!.lastName = formUser.lastName;
    existingUser!.email = formUser.email;
    existingUser!.age = formUser.age;
    existingUser!.company = formUser.company;
    existingUser!.department = formUser.department
    existingUser!.gender = formUser.gender;
    existingUser!.addresses = addressesForm.addresses;
  }
}
