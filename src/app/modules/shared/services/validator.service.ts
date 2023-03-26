import { Injectable } from '@angular/core';
import {UsersService} from "../../user/services/users.service";
import {AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn} from "@angular/forms";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor(private userService:UsersService) { }

  emailContainsDomain(domain: String): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value !== null && !control.value.endsWith(domain)) {
        return {incorrectDomain: true};
      }
      return null;
    };
  }

  uniqueEmail(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.userService.isEmailRegistered(control.value).pipe(
        map((exists: boolean) => (exists ? {emailExists: true} : null)))
    }
  }
}
