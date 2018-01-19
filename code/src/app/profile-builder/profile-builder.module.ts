import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileBuilderComponent } from './profile-builder.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatStepperModule, MatCardModule } from '@angular/material';
import { CollapsedProfileComponent } from './collapsed-profile/collapsed-profile.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';

@NgModule({
  imports: [
    CommonModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  declarations: [ProfileBuilderComponent, CollapsedProfileComponent, ProfileFormComponent],
  exports: [ProfileBuilderComponent]
})
export class ProfileBuilderModule { }
