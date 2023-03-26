import {Component, Input, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";

@Component({
  selector: 'app-add-address-form',
  templateUrl: './add-address-form.component.html',
  styleUrls: ['./add-address-form.component.scss']
})
export class AddAddressFormComponent implements OnInit {
  @Input() parentForm!: FormGroup;

  registerAddresses: FormGroup = this.formBuilder.group({
    addresses: this.formBuilder.array(
      [this.createAddressGroup()],
      {validators: [this.minLengthArray(1)]})
  });

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.parentForm.addControl('addressesForm', this.registerAddresses);
    console.log(this.parentForm);
  }

  createAddressGroup(): FormGroup {
    let newAddressGroup = this.formBuilder.group(
      {
        address: ['', Validators.required],
        city: [''],
        zip: [{value: '', disabled: true}]
      }, {validators: [this.addressValidator]});

    newAddressGroup.get('city')?.valueChanges.subscribe((value) => {
      if (value === '') {
        newAddressGroup.get('zip')?.disable();
      } else {
        newAddressGroup.get('zip')?.enable();
      }
    })

    return newAddressGroup;
  }

  minLengthArray(min: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value.length < min) {
        return {'minLengthArray': {valid: false, requiredLength: min, actualLength: control.value.length}}
      }
      return null;
    }
  }

  addresses(): FormArray {
    return this.registerAddresses.get('addresses') as FormArray;
  }

  addAddress(): void {
    this.addresses().push(this.createAddressGroup())
    console.log(this.parentForm);
  }

  removeAddress(i: number): void {
    this.addresses().removeAt(i);
    console.log(this.parentForm);
  }

  addressValidator(group: FormGroup) {
    const cityValue = group.get('city')?.value;
    const zip = group.get('zip')?.value;
    if (cityValue !== '' && zip === '') {
      return {invalidZip: true};
    }
    return null;
  }

  isDisabled(group: FormGroup): boolean {
    const cityValue = group.get('city')?.value;
    return cityValue === '';
  }
}
