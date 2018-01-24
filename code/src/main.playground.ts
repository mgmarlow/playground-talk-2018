import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { initializePlayground } from 'angular-playground';
import { CustomPlaygroundModule } from './custom-playground.module';

initializePlayground('app-root');
platformBrowserDynamic().bootstrapModule(CustomPlaygroundModule);
