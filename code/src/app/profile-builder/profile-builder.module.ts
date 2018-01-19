import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileBuilderComponent } from './profile-builder.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatStepperModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  declarations: [ProfileBuilderComponent],
  exports: [ProfileBuilderComponent]
})
export class ProfileBuilderModule { }
