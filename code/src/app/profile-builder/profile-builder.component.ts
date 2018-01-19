import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-builder',
  template: `
    <form [formGroup]="form">
      <mat-horizontal-stepper [linear]="true">
        <mat-step [stepControl]="name">
          <ng-template matStepLabel>Fill out your name</ng-template>
          <mat-form-field>
            <input matInput placeholder="Last name, First name" formControlName="name" required>
          </mat-form-field>
          <div>
            <button mat-button matStepperNext type="button">Next</button>
          </div>
        </mat-step>
        <mat-step [stepControl]="age">
          <ng-template matStepLabel>Fill out your age</ng-template>
          <mat-form-field>
            <input matInput placeholder="Age" formControlName="age" required>
          </mat-form-field>
          <div>
            <button mat-button matStepperPrevious type="button">Back</button>
            <button mat-button matStepperNext type="button">Next</button>
          </div>
        </mat-step>
        <mat-step>
          <ng-template matStepLabel>Fill out your address</ng-template>
          <mat-form-field>
            <input matInput placeholder="1234 Address Lane" formControlName="address" required>
          </mat-form-field>
          <div>
            <button mat-button matStepperPrevious type="button">Back</button>
            <button mat-button matStepperNext type="button">Confirm</button>
          </div>
        </mat-step>
        <mat-step>
          <ng-template matStepLabel>Done</ng-template>
          <button mat-button matStepperNext type="button">Confirm</button>
        </mat-step>
      </mat-horizontal-stepper>
    </form>
  `,
  styles: []
})
export class ProfileBuilderComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
        name: ['', Validators.required],
        age: ['', Validators.required],
        address: ['', Validators.required]
    });
  }
}
