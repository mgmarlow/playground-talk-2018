import { Component, Input } from '@angular/core';
import { Person } from '../profile-builder.component';

@Component({
  selector: 'app-collapsed-profile',
  template: `
    <mat-card>
      <mat-card-title>{{ person.name }}</mat-card-title>
      <mat-card-content>
        <p>Age: {{ person.age }}</p>
        <p>Address: {{ person.address }}</p>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    mat-card {
      width: 400px;
      margin: 0 auto;
    }
  `]
})
export class CollapsedProfileComponent {
  @Input() person: Person;
}
