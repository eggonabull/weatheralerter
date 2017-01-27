import {Component} from 'angular2/core'
import {ElementRef} from 'angular2/core'
import {Renderer} from 'angular2/core'

@Component({
	selector: 'star',
	template: `<i class="glyphicon" [(ngClass)]="{
		'glyphicon-star': isFull,
		'glyphicon-star-empty': isEmpty" 
		(click)="onToggle()" />`
})
export class StarComponent {
	isFull : boolean = true;
	isEmpty: boolean = false;

	constructor(private el: ElementRef, private renderer: Renderer) { }

	onToggle() {
		this.isEmpty = !this.isEmpty;
		this.isFull = !this.isFull;
	}

}