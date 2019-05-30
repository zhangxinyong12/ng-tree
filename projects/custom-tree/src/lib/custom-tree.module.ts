import { NgModule } from '@angular/core';
import { CustomTreeComponent } from './custom-tree.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CustomTreeComponent],
  imports: [
    CommonModule
  ],
  exports: [CustomTreeComponent]
})
export class CustomTreeModule { }
