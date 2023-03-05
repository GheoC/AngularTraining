import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsListViewComponent } from './cars-list-view.component';

describe('CarsListViewComponent', () => {
  let component: CarsListViewComponent;
  let fixture: ComponentFixture<CarsListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsListViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
