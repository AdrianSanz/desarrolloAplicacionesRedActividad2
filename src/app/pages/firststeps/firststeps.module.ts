import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirststepsRoutingModule } from './firststeps-routing.module';
import { FirststepsComponent } from './firststeps.component';


@NgModule({
  declarations: [
    FirststepsComponent
  ],
  imports: [
    CommonModule,
    FirststepsRoutingModule
  ]
})
export class FirststepsModule { }
