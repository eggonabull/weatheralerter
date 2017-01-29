import {Component} from 'angular2/core'
import {Input, Output} from 'angular2/core'
import {EventEmitter} from 'angular2/core'

@Component({
	selector: 'star',
	template: `
			<i 
				class="glyphicon"
				[(class.glyphicon-star)]="isFavorite"
				[(class.glyphicon-star-empty)]="!isFavorite" 
				(click)="onToggle()" >
			</i>`
})
export class StarComponent {
	@Input('is-favorite') isFavorite : boolean = true;

	@Output() change = new EventEmitter();

	onToggle() {
		this.isFavorite = !this.isFavorite;
	}

}