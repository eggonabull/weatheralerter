export class Tweet {
	constructor(
		name: string,
		handle: string,
		message: string,
		likes: number
	) {}
}

export class TweetService {
	getTweets(): Object[] {
		return [
			new Tweet(
				"Windward",
				"@windwardstudios",
				"Looking for a better company reporting or docgen app",
				0
			)
			new Tweet(
				"AngularJS News",
				"@angularjs_news",
				"Right Relevance : Influencers, Articles and Conversations",
				5
			),
			new Tweet(
				"UX & Bootstrap",
				"@3rdwave",
				"10 Reasons Why Web Project Fail",
				0
			)
		];
	}
}