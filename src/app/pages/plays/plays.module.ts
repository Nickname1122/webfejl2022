import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { PlaysRoutingModule } from './plays-routing.module';
import { PlaysComponent } from './plays.component';


@NgModule({
  declarations: [
    PlaysComponent
  ],
  imports: [
    CommonModule,
    PlaysRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class PlaysModule { }
