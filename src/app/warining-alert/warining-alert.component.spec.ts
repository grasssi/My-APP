import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WariningAlertComponent } from './warining-alert.component';

describe('WariningAlertComponent', () => {
  let component: WariningAlertComponent;
  let fixture: ComponentFixture<WariningAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WariningAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WariningAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
