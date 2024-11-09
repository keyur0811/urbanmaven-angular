import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';


// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { RouterModule } from '@angular/router';
// import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// platformBrowserDynamic().bootstrapModule(RouterModule.forRoot(routes))
//   .catch(err => console.error(err));