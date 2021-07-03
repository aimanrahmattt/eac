import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyUsageCalcComponent } from './energy-usage-calc.component';

describe('EnergyUsageCalcComponent', () => {
  let component: EnergyUsageCalcComponent;
  let fixture: ComponentFixture<EnergyUsageCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergyUsageCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyUsageCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
