import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlayComponent } from './add-play.component';

const routes: Routes = [
  { path: '', component: AddPlayComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddPlayRoutingModule { }
