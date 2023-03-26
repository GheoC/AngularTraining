import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAddressFormComponent } from './add-address-form.component';

describe('AddAddressFormComponent', () => {
  let component: AddAddressFormComponent;
  let fixture: ComponentFixture<AddAddressFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAddressFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
