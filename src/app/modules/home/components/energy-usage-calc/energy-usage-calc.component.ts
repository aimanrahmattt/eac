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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.energyUsageForm = this.fb.group({
      houseType: ['', Validators.required],
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

}
