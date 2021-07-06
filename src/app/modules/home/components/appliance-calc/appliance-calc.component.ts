import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-appliance-calc',
  templateUrl: './appliance-calc.component.html',
  styleUrls: ['./appliance-calc.component.scss']
})
export class ApplianceCalcComponent implements OnInit {
  applianceCalcForm: FormGroup;
  estimateUsageMonth: number = 0;
  submitted: boolean = false;
  error: string = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.applianceCalcForm = this.fb.group({
      usagePerDay: [0, Validators.required],
      days: [0, Validators.required],
      tariff: [0.3166, Validators.required],
      wattage: [0, Validators.required]
    });
  }

  calculate() {
    this.submitted = true;
    this.estimateUsageMonth = 0;
    this.error = '';
    
    if(this.applianceCalcForm.valid) {
      this.estimateUsageMonth += this.applianceCalcForm.value.usagePerDay * this.applianceCalcForm.value.days * this.applianceCalcForm.value.tariff * (this.applianceCalcForm.value.wattage/1000);

      if(this.estimateUsageMonth < 0) {
        this.error = 'Please enter a positive value.'
      }
    }
  }

}
