import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FormComponent],
  bootstrap: [],
  exports: [FormComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class FormModule {}
