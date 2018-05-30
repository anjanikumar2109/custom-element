import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [ButtonComponent]
})
export class AppModule {
	constructor(private injector: Injector) {
		const udButton = createCustomElement(ButtonComponent, { injector });
		customElements.define('ud-button', udButton);
	}
	
	ngDoBootstrap() {
	}
}
