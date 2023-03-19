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

  parentForm = new FormGroup({});

  onSubmit(): void {
    const userValue = this.parentForm.get('userForm')!.value as UserFormValue;
    if (this.parentForm.get('userForm')!.valid) {
      this.userService.addUser(userValue);
      this.router.navigate(['/users']);
    }
  }
}
