import {Component} from 'angular2/core'
import {TweetService} from './tweet.service'

@Component({
	selector: 'tweets',
	template: `
		<h2>Tweets</h2>
		<tweet *ngFor="#tweet of tweets">{{}}adsafdfd</tweet>
	`,
	providers: [TweetService]
})
export class AlertsComponent {
	title: string = "The title of the Alerts Page";
	tweets;

	constructor(tweetService: TweetService) {
		this.tweets = tweetService.getTweets();
	}
}