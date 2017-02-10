import {Component} from 'angular2/core'
import {Input, Output} from 'angular2/core'
import {EventEmitter} from 'angular2/core'


@Component({
	selector: 'voter',
	template: `
		<div class="voter">
			<i 
				class="glyphicon glyphicon-menu-up"
				[class.orange]="userVote == 1"
				(click)="upVote()">
			</i>
			<span 
				class="final-vote"
				[class.voted]="userVote != 0">
				{{totalVote + userVote}}
			</span>
			<i 
				class="glyphicon glyphicon-menu-down"
				[class.orange]="userVote == -1"
				(click)="downVote()">
			</i>
		</div>
	`,
	styles: [`
		.voter {
			width: 20px;
			text-align: center;
			color: #999;
		}
		.final-vote {
			font-size: large;
		}
		.final-vote.voted {
			color: #000;
		}
		.glyphicon {
			cursor: pointer;
		}
		.glyphicon.orange {
			color: orange;
		}
	`]
})
export class VoterComponent {
	@Input('user-vote') userVote : number = 0;
	@Input('total-vote') totalVote : number = 0;

	@Output() vote = new EventEmitter();

	upVote() {
		if(this.userVote == 1)
			return;
		this.userVote += 1;
		this.vote.emit({ myVote: this.userVote });
	}

	downVote() {
		if(this.userVote == -1)
			return;
		this.userVote -= 1;
		this.vote.emit({ myVote: this.userVote });
	}

}