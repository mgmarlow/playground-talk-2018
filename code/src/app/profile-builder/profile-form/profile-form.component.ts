import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from '../profile-builder.component';

@Component({
  selector: 'app-profile-form',
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
            <button mat-button matStepperNext type="button">Next</button>
          </div>
        </mat-step>
        <mat-step>
          <ng-template matStepLabel>Done</ng-template>
          <button (click)="submitForm(form.value)" mat-button type="button">Confirm</button>
        </mat-step>
      </mat-horizontal-stepper>
    </form>
  `,
  styles: [`
    form {
      width: 1000px;
      margin: 0 auto;
    }
  `]
})
export class ProfileFormComponent implements OnInit {
  @Output() submitPerson = new EventEmitter();
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
        name: ['', Validators.required],
        age: ['', Validators.required],
        address: ['', Validators.required]
    });
  }

  submitForm(formValue: Person) {
    this.submitPerson.emit(formValue);
  }
}
