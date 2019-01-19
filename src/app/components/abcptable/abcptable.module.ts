import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ABCPTableComponent} from './abcptable.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ABCPTableComponent],
  exports: [ABCPTableComponent]
})
export class AbcptableModule { }
