// We need this to build our post string


import querystring = require('querystring');
import http = require('http');
import fs = require('fs');

var postOptions = {
	host: 'commons.wikimedia.org',
	port: 80,
	path: '/wiki/Category:Weather_in_art',
	method: 'POST',
	headers: {}
}

var post_req = http.request(post_options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('Response: ' + chunk);
    });
});

export class ArtistrySerice {
	public artistrySearch = "https://commons.wikimedia.org/wiki/Category:Weather_in_art#/media/File:Joseph_Mallord_William_Turner_096.jpg";

	getArtistry(): string[] {
		return [this.artistrySearch]
	}
}
