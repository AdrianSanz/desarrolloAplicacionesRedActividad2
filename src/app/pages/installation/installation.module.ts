import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { InstallationRoutingModule } from './installation-routing.module';
import { InstallationComponent } from './installation.component';


@NgModule({
  declarations: [
    InstallationComponent
  ],
  imports: [
    CommonModule,
    InstallationRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class InstallationModule { }
