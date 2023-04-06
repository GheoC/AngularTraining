import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {debounceTime, distinctUntilChanged} from "rxjs";

@Component({
  selector: 'app-user-search-form',
  templateUrl: './user-search-form.component.html',
  styleUrls: ['./user-search-form.component.scss']
})
export class UserSearchFormComponent {

  @Output() searchParamsEmitter = new EventEmitter<string>();

  userSearchForm: FormGroup = this.formBuilder.group({
    name: [''],
  });

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.userSearchForm.get('name')!.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((value: string) => this.searchParamsEmitter.emit(value));
  }
}
