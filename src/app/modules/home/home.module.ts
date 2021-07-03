import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home.routes';
import { SharedModule } from 'src/app/shared/shared.module';
import { EnergyUsageCalcComponent } from './components/energy-usage-calc/energy-usage-calc.component';
import { ApplianceCalcComponent } from './components/appliance-calc/appliance-calc.component';


@NgModule({
  declarations: [
    HomeComponent,
    EnergyUsageCalcComponent,
    ApplianceCalcComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
