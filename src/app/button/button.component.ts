import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ud-button',
  templateUrl: './button.component.html',
  styles: [`
	button {
		border: solid 3px;
		padding: 8px 10px;
		background: #bada55;
		font-size: 20px;
	}
  `],
  encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent {
  @Input() label = 'Sample';
  @Output() action = new EventEmitter<number>();
  private counter = 0;
  
  click() {
	  this.counter+= 1;
	  this.action.emit(this.counter);
  }

}
