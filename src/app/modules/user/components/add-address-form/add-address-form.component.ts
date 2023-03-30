import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
} from "@angular/forms";
import {AddressFormService} from "../../services/address-form.service";

@Component({
  selector: 'app-add-address-form',
  templateUrl: './add-address-form.component.html',
  styleUrls: ['./add-address-form.component.scss']
})
export class AddAddressFormComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>();

  registerAddresses: FormGroup = this.formBuilder.group({
    addresses: this.formBuilder.array(
      [this.addressFormService.createAddressGroup()],
      // {validators: [this.minLengthArray(1)]}ng g
    )
  });

  constructor(private formBuilder: FormBuilder, private addressFormService: AddressFormService) {
  }

  ngOnInit(): void {
    this.formReady.emit(this.registerAddresses);
  }
  get addresses(): FormArray {
    return this.registerAddresses.get('addresses') as FormArray;
  }

  addAddress(): void {
    this.addresses.push(this.addressFormService.createAddressGroup())
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
