import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../../services/users.service";
import {User} from "../../models/User";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {AddressFormService} from "../../services/address-form.service";
import {UserFormValue} from "../../models/UserFormValue";
import {AddressesFormValue} from "../../models/AddressesFormValue";

@Component({
  selector: 'app-edit-user-page',
  templateUrl: './edit-user-page.component.html',
  styleUrls: ['./edit-user-page.component.scss']
})
export class EditUserPageComponent implements OnInit, AfterViewInit {

  id!: number;
  user?: User;
  form = new FormGroup({});

  constructor(private activatedRouter: ActivatedRoute, private userService: UsersService, private router: Router, private fb: FormBuilder,
              private addressFormService: AddressFormService) {}

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(param => this.id = param['id']);
    this.user = this.userService.getUserById(this.id);
    if (this.user === undefined) {
      //TODO create page not found and replace this
      this.router.navigate(['/users']);
    }
  }

  ngAfterViewInit(): void {
    this.populateUserForm();
    this.populateAddressesForm()
  }

  registerSubForm(subForm: FormGroup, key: string): void {
    this.form.addControl(key, subForm)
  }

  onClick() {
    this.form.markAllAsTouched();
    console.log(this.form);
    if (this.form.valid) {
      const userValue = this.form.get('userForm')!.value as UserFormValue;
      const addressesValue =this.form.get('addressesForm')!.value as AddressesFormValue;
      this.userService.editUserById(this.id, userValue, addressesValue);
      this.router.navigate(['/users']);
    }
  }

  populateUserForm(): void {
    this.form.patchValue({
      userForm: {
        firstName: this.user!.firstName,
        lastName: this.user!.lastName,
        email: this.user!.email,
        age: this.user!.age,
        company: this.user!.company,
        department: this.user!.department,
        gender: this.user!.gender
      }
    });
  }

  populateAddressesForm(): void {
    const addressesArray = this.form.get('addressesForm')?.get('addresses') as unknown;
    console.log(addressesArray);
    (addressesArray as FormArray).removeAt(0);
    for (let userAddress of this.user!.addresses) {
      let newAddressGroup: FormGroup = this.addressFormService.createAddressGroup();
      newAddressGroup.patchValue({
        address: userAddress.address,
        city: userAddress.city,
        zip: userAddress.zip
      });
      (addressesArray as FormArray).push(newAddressGroup);
    }
    console.log(addressesArray);
  }
}
