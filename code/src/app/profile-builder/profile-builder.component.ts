import { Component, OnInit } from '@angular/core';

export type Person = { name: string; age: number; address: string; };

@Component({
  selector: 'app-profile-builder',
  template: `
    <app-collapsed-profile
      [person]="person"
      *ngIf="person">
    </app-collapsed-profile>
    <app-profile-form
      (submitPerson)="onSubmit($event)"
      *ngIf="!person">
    </app-profile-form>
  `
})
export class ProfileBuilderComponent {
  person: Person;

  onSubmit(newPerson: Person) {
    this.person = newPerson;
  }
}
