/*
 * Entry point of the application.
 * Only platform bootstrapping code should be here.
 * For app-specific initialization, use `app/app.component.ts`.
 */

import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from '@app/app.module';
import { environment } from '@env/environment';

/* function sayHelloJS(x: any) {
  console.log('Hello from ' + x);
}
export const eel = window.eel;
console.log(window.eel);
if (eel) {
  eel.set_host('ws://localhost:8000');
  window.eel.expose(sayHelloJS, 'say_hello_js');
}
 */
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule, { preserveWhitespaces: true })
  .catch(err => console.log(err));
