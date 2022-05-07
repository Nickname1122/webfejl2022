import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AddPlayRoutingModule } from './add-play-routing.module';
import { AddPlayComponent } from './add-play.component';



@NgModule({
  declarations: [
    AddPlayComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AddPlayRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ]
})
export class AddPlayModule { }
