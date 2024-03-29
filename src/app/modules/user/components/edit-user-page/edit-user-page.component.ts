import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../../services/users.service";
import {User} from "../../models/User";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {AddressFormService} from "../../services/address-form.service";
import {UserFormValue} from "../../models/UserFormValue";
import {AddressesFormValue} from "../../models/AddressesFormValue";
import {IDeactivateComponent} from "../../../core/guards/can-deactivate/can-deactivate.guard";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-edit-user-page',
  templateUrl: './edit-user-page.component.html',
  styleUrls: ['./edit-user-page.component.scss']
})
export class EditUserPageComponent implements OnInit, OnDestroy, IDeactivateComponent {

  id!: number;
  user?: User;
  form = new FormGroup({});
  isSubmitted: boolean = false;
  isLoading: boolean = false;
  userSubscription!: Subscription;
  paramSubscription!: Subscription;

  constructor(private activatedRouter: ActivatedRoute,
              private userService: UsersService,
              private router: Router,
              private fb: FormBuilder,
              private addressFormService: AddressFormService) {}

  ngOnInit(): void {
    this.isLoading = true
    this.paramSubscription = this.activatedRouter.params.subscribe(param => {
      this.id = param['id'];

      this.userSubscription = this.userService.getUserById(this.id).subscribe(value => {
        if (value === undefined) {
          this.router.navigate(['/users']);
        }

        this.isLoading= false
        this.user = value;
        this.populateUserForm();
        this.populateAddressesForm();
      });
    });
  }

  registerSubForm(subForm: FormGroup, key: string): void {
    this.form.addControl(key, subForm)
  }

  onSubmit() {
    console.log("clicked")
    this.form.markAllAsTouched();
    if (this.form.valid && !this.isLoading) {
      console.log("sending data...")
      this.isSubmitted = true;
      const userValue = this.form.get('userForm')!.value as UserFormValue;
      const addressesValue = this.form.get('addressesForm')!.value as AddressesFormValue;

      this.isLoading = true;
      this.userService.editUserById(this.id, userValue, addressesValue).subscribe(value => {
        this.isLoading = false;

        if (value) {
          this.form.markAsPristine();
          this.router.navigate(['/users']);
        }
      });
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
  }

  canExit() {
    return this.form.pristine;
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
    this.paramSubscription.unsubscribe();
  }
}
