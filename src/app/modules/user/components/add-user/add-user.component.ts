import { Component } from '@angular/core';
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  constructor(private userService: UsersService, private router: Router){};

  addUser(newUserForm: FormGroup):void {
    this.userService.addUser(newUserForm.value);
    this.router.navigate(['/users']);
  }
}
