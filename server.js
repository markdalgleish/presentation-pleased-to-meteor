var cuecard = require('cuecard');

cuecard.create({
	title: 'Pleased to Meteor',
	slides: __dirname + '/slides.jade',
	styles: __dirname + '/slides.styl',
	static: __dirname + '/public'
});