import {Component} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";
import {FormGroup} from "@angular/forms";
import {UserFormValue} from "../../models/UserFormValue";
import {AddressesFormValue} from "../../models/AddressesFormValue";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user-page.component.html',
  styleUrls: ['./add-user-page.component.scss']
})
export class AddUserPageComponent {
  constructor(private userService: UsersService, private router: Router) {
  };

  form = new FormGroup({});

  onClick(): void {
    this.form.markAllAsTouched();
    console.log(this.form);
    if (this.form.valid) {
      const userValue = this.form.get('userForm')!.value as UserFormValue;
      const addressesValue =this.form.get('addressesForm')!.value as AddressesFormValue;
      this.userService.addUser(userValue, addressesValue);
      this.router.navigate(['/users']);
    }
  }

  registerSubForm(subForm: FormGroup, key: string): void{
    this.form.addControl(key, subForm)
  }
}
