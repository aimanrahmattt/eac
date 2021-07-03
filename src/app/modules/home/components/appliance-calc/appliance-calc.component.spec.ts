import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplianceCalcComponent } from './appliance-calc.component';

describe('ApplianceCalcComponent', () => {
  let component: ApplianceCalcComponent;
  let fixture: ComponentFixture<ApplianceCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplianceCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplianceCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
