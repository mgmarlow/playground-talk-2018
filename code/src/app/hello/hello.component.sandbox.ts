import { HelloComponent } from './hello.component';
import { sandboxOf } from 'angular-playground';

// Note: this component is not included in any module
export default sandboxOf(HelloComponent)
    .add('Basic', {
        template: `<app-hello name="Playground"></app-hello>`
    })





    // "context" provides variables to your component
    .add('With Variable', {
        template: `<app-hello [name]="myName"></app-hello>`,
        context: {
            myName: 'Graham'
        }
    })

    


    // Add as much extra markup as you need to set up a scenario
    .add('With additional markup', {
        template: `
            <h1>Hello App</h1>
            <p>This is my hello app.</p>
            <app-hello [name]="myName"></app-hello>
        `,
        context: {
            myName: 'Playground'
        }
    })




    // Wire up outputs just as you would in a regular application's template
    .add('With outputs', {
        template: `
            <h1>Hello App</h1>
            <p>This is my hello app.</p>
            <app-hello [name]="myName" (buttonClick)="clickMsg = 'clicked!'"></app-hello>
            {{ clickMsg }}
        `,
        context: {
            myName: 'Playground'
        }
    })





    // Even add style to your template
    .add('With style', {
        template: `
            <h1>Hello App</h1>
            <p>This is my hello app.</p>
            <app-hello [name]="myName" (buttonClick)="onClick($event)"></app-hello>
        `,
        context: {
            myName: 'Playground',
            onClick: (msg) => console.log(msg)
        },
        styles: [`
            p {
                color: red;
            }
        `]
    })

    // Show how easy it is to copy + paste the above scenario and replace it w/ a different color
