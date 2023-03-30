import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import {TGender} from "../../models/TGender";
import {ValidatorService} from "../../../shared/services/validator.service";
import {combineLatest, startWith} from "rxjs";

const GMAIL_VALIDATION_DOMAIN = '@gmail.com'

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss']
})
export class AddUserFormComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>();

  registerForm: FormGroup = this.createUserForm();

  constructor(private formBuilder: FormBuilder, private validatorsService: ValidatorService) {
  }

  ngOnInit(): void {
    this.formReady.emit(this.registerForm);
  }

  createUserForm():FormGroup{
    const userFormGroup = this.formBuilder.group({
      firstName: ['', {validators: [Validators.required, Validators.minLength(3)]}],
      lastName: ['', {validators: [Validators.required, Validators.minLength(3)]}],
      email: ['', {
        validators: [Validators.required, Validators.email, this.validatorsService.emailContainsDomain(GMAIL_VALIDATION_DOMAIN)],
        asyncValidators: [this.validatorsService.uniqueEmail()]
      }],
      age: [null, {validators: [Validators.required, Validators.min(15), Validators.max(100)]}],
      company: ['', {validators: [Validators.required, Validators.maxLength(35)]}],
      department: ['', {validators: [Validators.required, Validators.minLength(6)]}],
      gender: ['male' as TGender, {validators: [Validators.required]}],
    });

    combineLatest(
      [ userFormGroup.get('firstName')!.valueChanges.pipe(startWith('')),
               userFormGroup.get('lastName')!.valueChanges.pipe(startWith(''))])
      .subscribe(([val1, val2]) =>
        userFormGroup.get('email')?.setValue((val1 as string).toLowerCase()+'.'+(val2 as string).toLowerCase()+'@gmail.com'));

    return userFormGroup;
  }
}
