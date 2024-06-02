import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { PrincipalComponent } from './app/components/principal/principal.component';

bootstrapApplication(PrincipalComponent, appConfig)
  .catch((err) => console.error(err));
