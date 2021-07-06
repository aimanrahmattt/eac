import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-saving-tips',
  templateUrl: './saving-tips.component.html',
  styleUrls: ['./saving-tips.component.scss']
})
export class SavingTipsComponent implements OnInit {
  savingForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.savingForm = this.fb.group({
      info: ['general']
    });
  }

}
