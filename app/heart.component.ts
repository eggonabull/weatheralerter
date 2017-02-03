import {Component} from 'angular2/core'
import {Input, Output} from 'angular2/core'
import {EventEmitter} from 'angular2/core'

@Component({
	selector: 'heart',
	template: `
		<i class="glyphicon-heart"></i>
		<span class="count">{{click}}</span>
	`,
	styles: [`
		.glyphicon-star {
			color: orange;
		}
	`]
})
export class StarComponent {
	@Input('is-heart') isFavorite : boolean = true;

	@Output() change = new EventEmitter();

	onToggle() {
		this.isFavorite = !this.isFavorite;
		this.change.emit({ newValue: this.isFavorite });
	}

}