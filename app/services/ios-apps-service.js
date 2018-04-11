'use strict';

// import axios from 'axios';

export const getApps = () => {
	return Promise.resolve(
		[{
			id: 1,
			title: 'Pixmint',
			subtitle: 'A palette of colors in the palm of your hands.',
			icon: 'pixmint.png',
			contentClass: 'pixmint-content',
			info: 'Beautiful. Redesigned.',
			subInfo: 'Made for developers and designers.',
			screenshots: [{
				id: 1,
				title: 'Hexadecimal Code',
				glyphicon: 'glyphicon-tasks',
				image: 'pixmint1.png'
			}, {
				id: 2,
				title: 'RGB Values',
				glyphicon: 'glyphicon-tint',
				image: 'pixmint2.png'
			}, {
				id: 3,
				title: 'Try it with Expo',
				glyphicon: 'glyphicon-phone',
				image: 'pixmint3.png'
			}],
			download: {
				title: 'Expo',
				link: 'https://expo.io/@michaelmaysonet74/pixmint',
				icon: 'fa fa-mobile',
			},
		},
		// {
		// 	id: 2,
		// 	title: 'Transposed',
		// 	subtitle: 'Change the key tone of your chord progressions anytime, anywhere!',
		// 	icon: 'transposed.png',
		// 	contentClass: 'transposed-content',
		// 	info: 'The singer needs another tone?',
		// 	subInfo: `Transposed gives you piece of mind while you're playing live.`,
		// 	screenshots: [{
		// 		id: 4,
		// 		title: 'Set Chord Progressions',
		// 		glyphicon: 'glyphicon-music',
		// 		image: 'set-chord.gif'
		// 	}, {
		// 		id: 5,
		// 		title: 'Scroll To Change Tones',
		// 		glyphicon: 'glyphicon-refresh',
    //     image: 'scroll.gif'
    //   }, {
		// 		id: 6,
		// 		title: 'Select Natural, Sharp Or Flat',
		// 		glyphicon: 'glyphicon-equalizer',
		// 		image: 'natural-sharp-flat.gif'
		// 	}],
		// 	download: 'https://itunes.apple.com/us/app/transposed/id1081133377?mt=8'
		// },
		{
			id: 3,
			title: 'Chess Hourglass',
			subtitle: `Don't let time trickles through your fingers without notice.`,
			icon: 'hourglass.png',
			info: 'Check. Mate.',
			contentClass: 'chess-hourglass-content',
			subInfo: 'Chess Hourglass is an easy to use timer that makes you aware of how long your moves can be.',
			screenshots: [{
				id: 7,
				title: 'Select Match',
				glyphicon: 'glyphicon-king',
				image: 'hourglass1.png'
			}, {
				id: 8,
				title: 'Setup Timer',
				glyphicon: 'glyphicon-knight',
				image: 'hourglass2.png'
			}, {
				id: 9,
				title: 'Pause & Restart',
				glyphicon: 'glyphicon-queen',
				image: 'hourglass3.png'
			}],
			download: {
				title: 'Expo',
				link: 'https://expo.io/@michaelmaysonet74/chess-hourglass',
				icon: 'fa fa-mobile',
			},
		},
	]);
};

// export const getApps = () => {
// // 	return axios.get(`${process.env.PRYXMA_API}/apps`);
// // 	return axios.get(`http://localhost:3000/apps`);
// };
