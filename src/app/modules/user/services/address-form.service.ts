import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class AddressFormService {

  constructor(private formBuilder: FormBuilder) { }

  createAddressGroup(): FormGroup {
    let newAddressGroup = this.formBuilder.group(
      {
        address: ['', Validators.required],
        city: [''],
        zip: [{value: '', disabled: true}]
      },
      // {validators: [this.addressValidator]}
    );
    newAddressGroup.get('city')?.valueChanges.subscribe((value) => {
      const zip = newAddressGroup.get('zip')!;
      if (value === '') {
        zip.disable();
        zip.clearValidators();
      } else {
        zip.enable();
        zip.addValidators(Validators.required);
      }
    })

    return newAddressGroup;
  }
}
