import {Component, Input, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import {TGender} from "../../models/TGender";
import {ValidatorService} from "../../../shared/services/validator.service";

const GMAIL_VALIDATION_DOMAIN = '@gmail.com'

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss']
})
export class AddUserFormComponent implements OnInit {
  @Input() parentForm!: FormGroup;

  registerForm: FormGroup = this.formBuilder.group({
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

  constructor(private formBuilder: FormBuilder, private validatorsService: ValidatorService) {
  }

  ngOnInit(): void {
    this.parentForm.addControl('userForm', this.registerForm);
  }
}
