import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-search-form',
  templateUrl: './user-search-form.component.html',
  styleUrls: ['./user-search-form.component.scss']
})
export class UserSearchFormComponent {
  @Output() formReady = new EventEmitter<FormGroup>();
  userSearchForm: FormGroup = this.createUserSearchForm();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formReady.emit(this.userSearchForm);
  }

  createUserSearchForm(): FormGroup {
    return this.formBuilder.group({
      firstName: [''],
      lastName: [''],
    });
  }
}
