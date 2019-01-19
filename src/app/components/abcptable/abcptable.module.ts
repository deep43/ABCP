import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';
import {ABCPTableComponent} from './abcptable.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule
  ],
  declarations: [ABCPTableComponent],
  exports: [ABCPTableComponent]
})
export class AbcptableModule { }
