import {Component} from 'angular2/core'
import {Input, Output} from 'angular2/core'
import {EventEmitter} from 'angular2/core'

@Component({
	selector: 'star',
	templateUrl: 'app/star.template.html',
	styles: [`
		.glyphicon-star {
			color: orange;
		}
	`]
})
export class StarComponent {
	@Input('is-favorite') isFavorite : boolean = true;

	@Output() change = new EventEmitter();

	onToggle() {
		this.isFavorite = !this.isFavorite;
		this.change.emit({ newValue: this.isFavorite });
	}

}