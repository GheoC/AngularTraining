import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
  @Output() formReady = new EventEmitter<FormGroup>();

  registerAddresses: FormGroup = this.formBuilder.group({
    addresses: this.formBuilder.array(
      [this.createAddressGroup()],
      // {validators: [this.minLengthArray(1)]}
    )
  });

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formReady.emit(this.registerAddresses);
  }

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

  minLengthArray(min: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value.length < min) {
        return {'minLengthArray': {valid: false, requiredLength: min, actualLength: control.value.length}}
      }
      return null;
    }
  }

  get addresses(): FormArray {
    return this.registerAddresses.get('addresses') as FormArray;
  }

  addAddress(): void {
    this.addresses.push(this.createAddressGroup())
  }

  removeAddress(i: number): void {
    this.addresses.removeAt(i);
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
