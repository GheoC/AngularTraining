import {Component} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";
import {FormGroup} from "@angular/forms";
import {UserFormValue} from "../../models/UserFormValue";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user-page.component.html',
  styleUrls: ['./add-user-page.component.scss']
})
export class AddUserPageComponent {
  constructor(private userService: UsersService, private router: Router) {
  };

  form = new FormGroup({});

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.get('userForm')!.valid) {
      const userValue = this.form.get('userForm')!.value as UserFormValue;
      this.userService.addUser(userValue);
      this.router.navigate(['/users']);
    }
  }
}
