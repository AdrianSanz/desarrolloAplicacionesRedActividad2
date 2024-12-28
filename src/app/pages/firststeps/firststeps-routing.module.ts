import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirststepsComponent } from './firststeps.component';

const routes: Routes = [
  {path: '', component: FirststepsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirststepsRoutingModule { }
