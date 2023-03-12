import { Component } from '@angular/core';
import {UsersService} from "../../services/users.service";
import {User} from "../../models/User";
import {Router} from "@angular/router";
import {FormGroup} from "@angular/forms";
import {TGender} from "../../models/TGender";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  constructor(private userService: UsersService, private router: Router){};

  addUser(newUserForm: FormGroup):void {
    let newUser: User = {
        firstName: newUserForm.value.firstName,
        lastName: newUserForm.value.lastName,
        email: newUserForm.value.email!,
        age: newUserForm.value.age!,
        company: newUserForm.value.company!,
        department: newUserForm.value.department!,
        gender: newUserForm.value.gender! as TGender,
        imageUrl: newUserForm.value.imageUrl!
      }

    this.userService.addUser(newUser);
    this.router.navigate(['/users']);
  }
}
