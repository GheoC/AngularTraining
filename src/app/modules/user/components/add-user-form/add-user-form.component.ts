import {Component, Input, OnInit} from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from "@angular/forms";
import {TGender} from "../../models/TGender";
import {UsersService} from "../../services/users.service";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss']
})
export class AddUserFormComponent implements OnInit {
  @Input() parentForm!: FormGroup;

  registerForm: FormGroup = this.formBuilder.group({
    firstName: ['', {validators: [Validators.required, Validators.minLength(3)], updateOn: 'submit'}],
    lastName: ['', {validators: [Validators.required, Validators.minLength(3)], updateOn: 'submit'}],
    email: ['', {
      validators: [Validators.required, Validators.email, this.emailContainsGmailDomain],
      asyncValidators: [this.uniqueEmail()],
      updateOn: 'submit'
    }],
    age: [null, {validators: [Validators.required, Validators.min(15), Validators.max(100)], updateOn: 'submit'}],
    company: ['', {validators: [Validators.required, Validators.maxLength(35)], updateOn: 'submit'}],
    department: ['', {validators: [Validators.required, Validators.minLength(6)], updateOn: 'submit'}],
    gender: ['male' as TGender, {validators: [Validators.required], updateOn: 'submit'}],
  });
  isSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private userService: UsersService) {
  }

  ngOnInit(): void {
    this.parentForm.addControl('userForm', this.registerForm);
  }

  emailContainsGmailDomain(control: FormControl): ValidationErrors | null {
    if (control.value !== null && !control.value.includes('@gmail.com')) {
      return {incorrectDomain: true};
    }
    return null;
  }

  uniqueEmail(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.userService.isEmailRegistered(control.value).pipe(
        map((exists: boolean) => (exists ? {emailExists: true} : null)))
    }
  }
}
