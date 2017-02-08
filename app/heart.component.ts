import {Component} from 'angular2/core'
import {Input, Output} from 'angular2/core'
import {EventEmitter} from 'angular2/core'

@Component({
	selector: 'heart',
	template: `
		<i 
			class="glyphicon glyphicon-heart"
			[(class.liked)]="isLiked"
			(click)="onToggle()">
		</i>
		<span class="count">{{likeCount}}</span>
	`,
	styles: [`
		.glyphicon-heart {
			cursor: pointer;
			color: #ccc;
		}
		.glyphicon-heart.liked {
			color: red;
		}
	`]
})
export class HeartComponent {
	@Input('is-liked') isLiked : boolean = false;
	@Input('like-count') likeCount : number = 0;

	@Output() change = new EventEmitter();

	onToggle() {
		this.isLiked = !this.isLiked;
		this.likeCount = this.isLiked ? this.likeCount + 1 : this.likeCount - 1;
		this.change.emit({ newValue: [this.isLiked, this.likeCount ] });
	}

}