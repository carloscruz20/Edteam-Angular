import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarsComponent } from './mars.component';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';

@NgModule({
  declarations: [MarsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ]
})
export class MarsModule { }
