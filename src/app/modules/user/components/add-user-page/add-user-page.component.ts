import {Component, OnDestroy} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";
import {FormGroup} from "@angular/forms";
import {UserFormValue} from "../../models/UserFormValue";
import {AddressesFormValue} from "../../models/AddressesFormValue";
import {User} from "../../models/User";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user-page.component.html',
  styleUrls: ['./add-user-page.component.scss']
})
export class AddUserPageComponent implements OnDestroy {

  constructor(private userService: UsersService, private router: Router) {
  };

  form = new FormGroup({});
  isLoading: boolean = false;
  userSubscription!: Subscription;

  onClick(): void {
    this.form.markAllAsTouched();
    if (this.form.valid && !this.isLoading) {
      this.isLoading = true;
      const userValue = this.form.get('userForm')!.value as UserFormValue;
      const addressesValue = this.form.get('addressesForm')!.value as AddressesFormValue;

      this.userSubscription = this.userService.addUser(userValue, addressesValue).subscribe((result: User) => {
        if (result) {
          this.router.navigate(['/users']);
        } else {
          alert('Error');
        }
      });
    }
  }

  registerSubForm(subForm: FormGroup, key: string): void {
    this.form.addControl(key, subForm)
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  };
}
