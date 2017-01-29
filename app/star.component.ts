import {Component} from 'angular2/core'
import {ElementRef} from 'angular2/core'
import {Renderer} from 'angular2/core'

@Component({
	selector: 'star',
	template: `
			<i 
				class="glyphicon"
				[(class.glyphicon-star)]="isFull"
				[(class.glyphicon-star-empty)]="!isFull" 
				(click)="onToggle()" >
			</i>`
})
export class StarComponent {
	isFull : boolean = true;

	constructor(private el: ElementRef, private renderer: Renderer) { }

	onToggle() {
		this.isFull = !this.isFull;
	}

}