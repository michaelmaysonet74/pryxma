'use strict';

const express = require('express');

const appsRoutes = express.Router();

const apps = [{
			id: 1,
			title: 'Pixmint',
			subtitle: 'A palette of colors in the palm of your hands.',
			icon: 'icon image',
			info: 'Beautiful. Redesigned.',
			subInfo: 'Made for developers and designers.',
			screenshots: [{
				title: '',
				image: ''
			}],
			download: 'https://itunes.apple.com/us/app/pixmint/id1084232768?mt=8'	
		}, {
			id: 2,
			title: 'Transposed',
			subtitle: 'Change the key tone of your chord progressions anytime, anywhere!',
			icon: 'icon image',
			info: 'The singer needs another tone?',
			subInfo: `Transposed gives you piece of mind while you're playing live.`,
			screenshots: [{
				title: '',
				image: ''
			}],
			download: 'https://itunes.apple.com/us/app/transposed/id1081133377?mt=8'	
		}, {
			id: 3,
			title: 'Chess Hourglass',
			subtitle: `Don't let time trickles through your fingers without notice.`,
			icon: 'icon image',
			info: 'Check. Mate.',
			subInfo: 'Chess Hourglass is an easy to use timer that makes you aware of how long your moves can be..',
			screenshots: [{
				title: '',
				image: ''
			}],
			download: 'https://itunes.apple.com/vc/app/chess-hourglass/id1082128643?mt=8'
		}
	];

appsRoutes.get('', (req, res) => {
	
	res.send(JSON.stringify(apps));
});

module.exports = appsRoutes;