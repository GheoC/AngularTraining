import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TGender} from "../../models/TGender";

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss']
})
export class AddUserFormComponent {

  @Output() formControlEventEmitter = new EventEmitter<FormGroup>();

  registerForm: FormGroup = this.formBuilder.group({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]), //one way to declare FormControl
    lastName: ['', [Validators.required, Validators.minLength(3)]], // another way to declare a FormControl
    email: ['', [Validators.required, Validators.email]],
    age: [null, [Validators.required, Validators.min(18), Validators.max(110)]],
    company: ['', [Validators.required, Validators.minLength(3)]],
    department: ['', [Validators.required, Validators.minLength(2)]],
    imageUrl: ['', [Validators.required]],
    gender: ['male' as TGender, [Validators.required]],
  });
  isSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {
  }

  isFieldInvalid(fieldName: string): boolean {
    return (this.registerForm.get(fieldName)?.invalid! &&
      (this.registerForm.get(fieldName)?.dirty || this.registerForm.get(fieldName)?.touched || this.isSubmitted));
  }

  onSubmit(): void {
    if (this.registerForm.valid){
      this.formControlEventEmitter.emit(this.registerForm);
    }
  }
}
