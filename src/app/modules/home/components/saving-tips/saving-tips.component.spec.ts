import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingTipsComponent } from './saving-tips.component';

describe('SavingTipsComponent', () => {
  let component: SavingTipsComponent;
  let fixture: ComponentFixture<SavingTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingTipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
