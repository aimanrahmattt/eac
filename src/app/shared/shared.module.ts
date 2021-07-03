import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from './icons/icons.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IconsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    IconsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
