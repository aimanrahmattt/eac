import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-appliance-calc',
  templateUrl: './appliance-calc.component.html',
  styleUrls: ['./appliance-calc.component.scss']
})
export class ApplianceCalcComponent implements OnInit {
  applianceCalcForm: FormGroup;
  estimateUsage: number = 0;
  estimateCharge: number = 0;
  estimateUsageMonth: number = 0;
  submitted: boolean = false;

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
    if(this.applianceCalcForm.valid) {

    }
  }

}
