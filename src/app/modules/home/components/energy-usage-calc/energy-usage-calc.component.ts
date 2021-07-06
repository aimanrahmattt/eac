import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-energy-usage-calc',
  templateUrl: './energy-usage-calc.component.html',
  styleUrls: ['./energy-usage-calc.component.scss']
})
export class EnergyUsageCalcComponent implements OnInit {
  energyUsageForm: FormGroup;
  selectedRooms = [];
  totalUsage:number = 0;
  submitted: boolean = false;
  error: string = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.energyUsageForm = this.fb.group({
      houseType: [''],
      roomList: this.fb.array([]),
      livingRoom: [0],
      bathroom: [0],
      masterBed: [0],
      bedroom: [0],
      diningRoom: [0],
      kitchen: [0],
      aircondUsage: [0],
      aircondDays: [0],
      aircondWatts: [0],
      fanUsage: [0],
      fanDays: [0],
      fanWatts: [0],
      lightUsage: [0],
      lightDays: [0],
      lightWatts: [0],
      pcUsage: [0],
      pcDays: [0],
      pcWatts: [0],
      tvUsage: [0],
      tvDays: [0],
      tvWatts: [0],
      phoneChargerUsage: [0],
      phoneChargerDays: [0],
      phoneChargerWatts: [0],
      fridgeUsage: [0],
      fridgeDays: [0],
      fridgeWatts: [0],
      microwaveUsage: [0],
      microwaveDays: [0],
      microwaveWatts: [0],
      riceCookerUsage: [0],
      riceCookerDays: [0],
      riceCookerWatts: [0],
      washingMachineUsage: [0],
      washingMachineDays: [0],
      washingMachineWatts: [0]
    });
  }

  getRoomList(form) {
    return form.controls.roomList.controls;
  }

  addRoom(type) {
    let updateText = type.replace('R', ' r');
    updateText = updateText.replace('masterBed', 'Master Bedroom');

    const group = this.fb.group({
      type: [type],
      title: [updateText],
      aircond: [0],
      fan: [0],
      light: [0],
      pc: [0],
      tv: [0],
      phoneCharger: [0],
      fridge: [0],
      microwave: [0],
      riceCooker: [0],
      washingMachine: [0]
    });

    this.energyUsageForm.controls[type].setValue(this.energyUsageForm.get(type).value + 1);
    const control = <FormArray>this.energyUsageForm.get('roomList');
    control.push(group);
  }

  removeRoom(type) {
    if (this.energyUsageForm.get(type).value !== 0) {
      const control = <FormArray>this.energyUsageForm.get('roomList');
      let roomIndex = (<FormArray>this.energyUsageForm.get('roomList')).controls.map((room, j) => {
        if(room.value.type === type) {
          return j;
        }
      });
      
      control.removeAt(roomIndex.length-1);
      this.energyUsageForm.controls[type].setValue(this.energyUsageForm.get(type).value - 1);
    }
  }

  incrementItem(type, item, itemIndex) {
    const itemValue = this.energyUsageForm.get('roomList')['controls'][itemIndex].get(item).value;
    <FormArray>this.energyUsageForm.get('roomList')['controls'][itemIndex].controls[item].setValue(itemValue + 1);
  }

  decrementItem(type, item, itemIndex) {
    const itemValue = this.energyUsageForm.get('roomList')['controls'][itemIndex].get(item).value;
    if (itemValue !== 0) {
      <FormArray>this.energyUsageForm.get('roomList')['controls'][itemIndex].controls[item].setValue(itemValue - 1);
    }
  }

  getTotalCount(type) {
    let totalItems = this.energyUsageForm.get('roomList')['controls'].map(room => room.get(type).value );
    return totalItems.reduce((a, b) => a+b, 0);
  }

  calculate() {
    this.submitted = true;

    if(this.energyUsageForm.valid) {
      this.totalUsage = 0;
      this.error = '';

      if(this.getTotalCount('aircond') > 0) {
        this.totalUsage += this.calculateTariff(this.getTotalCount('aircond'), this.energyUsageForm.value.aircondUsage, this.energyUsageForm.value.aircondDays, this.energyUsageForm.value.aircondWatts);
      }

      if(this.getTotalCount('fan') > 0) {
        this.totalUsage += this.calculateTariff(this.getTotalCount('fan'), this.energyUsageForm.value.fanUsage, this.energyUsageForm.value.fanDays, this.energyUsageForm.value.fanWatts);
      }

      if(this.getTotalCount('light') > 0) {
        this.totalUsage += this.calculateTariff(this.getTotalCount('light'), this.energyUsageForm.value.lightUsage, this.energyUsageForm.value.lightDays, this.energyUsageForm.value.lightWatts);
      }

      if(this.getTotalCount('pc') > 0) {
        this.totalUsage += this.calculateTariff(this.getTotalCount('pc'), this.energyUsageForm.value.pcUsage, this.energyUsageForm.value.pcDays, this.energyUsageForm.value.pcWatts);
      }

      if(this.getTotalCount('tv') > 0) {
        this.totalUsage += this.calculateTariff(this.getTotalCount('tv'), this.energyUsageForm.value.tvUsage, this.energyUsageForm.value.tvDays, this.energyUsageForm.value.tvWatts);
      }

      if(this.getTotalCount('phoneCharger') > 0) {
        this.totalUsage += this.calculateTariff(this.getTotalCount('phoneCharger'), this.energyUsageForm.value.phoneChargerUsage, this.energyUsageForm.value.phoneChargerDays, this.energyUsageForm.value.phoneChargerWatts);
      }

      if(this.getTotalCount('fridge') > 0) {
        this.totalUsage += this.calculateTariff(this.getTotalCount('fridge'), this.energyUsageForm.value.fridgeUsage, this.energyUsageForm.value.fridgeDays, this.energyUsageForm.value.fridgeWatts);
      }

      if(this.getTotalCount('microwave') > 0) {
        this.totalUsage += this.calculateTariff(this.getTotalCount('microwave'), this.energyUsageForm.value.microwaveUsage, this.energyUsageForm.value.microwaveDays, this.energyUsageForm.value.microwaveWatts);
      }

      if(this.getTotalCount('riceCooker') > 0) {
        this.totalUsage += this.calculateTariff(this.getTotalCount('riceCooker'), this.energyUsageForm.value.riceCookerUsage, this.energyUsageForm.value.riceCookerDays, this.energyUsageForm.value.riceCookerWatts);
      }

      if(this.getTotalCount('washingMachine') > 0) {
        this.totalUsage += this.calculateTariff(this.getTotalCount('washingMachine'), this.energyUsageForm.value.washingMachineUsage, this.energyUsageForm.value.washingMachineDays, this.energyUsageForm.value.washingMachineWatts);
      }

      if(this.totalUsage < 0) {
        this.error = 'Please enter a positive value.';
        this.totalUsage = 0;

        setTimeout(() => {
          this.scrollToTarget('.alert-danger');
        }, 250);
      } else if(this.totalUsage === 0) {
        this.error = 'Dont leave the input field empty.';

        setTimeout(() => {
          this.scrollToTarget('.alert-danger');
        }, 250);
      }
    }
  }

  calculateTariff(numberAppliance, hour, day, watts) {
    return numberAppliance * hour * day * 0.3166 * (watts/1000) ;
  }

  scrollToTarget(target): void {
    const element = document.querySelector(target);
    this.scrollTo(element);
  }

  scrollTo(el: Element): void {
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

}
