import { CollapsedProfileComponent } from './collapsed-profile.component';
import { sandboxOf } from 'angular-playground';
import { MatCardModule } from '@angular/material';

export default sandboxOf(CollapsedProfileComponent, {
  imports: [ MatCardModule ]
})


  .add('Above the age of 20', {
      template: `
        <app-collapsed-profile
          [person]="person">
        </app-collapsed-profile>
      `,
      context: {
        person: {
          name: 'Marlow, Graham',
          age: '23',
          address: '1234 California Lane'
        }
      }
  })


  .add('Below the age of 20', {
      template: `
        <app-collapsed-profile
          [person]="person">
        </app-collapsed-profile>
      `,
      context: {
        person: {
          name: 'Else, Someone',
          age: '15',
          address: '4321 Place st.'
        }
      }
  })

  // copy + paste third example, debug the fact that age 20 doesn't show anything
