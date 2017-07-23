'use strict'; 

//import axios from 'axios';

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
				image: 'assets/screenshots/pixmint1.png'
			}, {
				id:2,
				title: 'RGB Values',
				glyphicon: 'glyphicon-tint',
				image: 'assets/screenshots/pixmint2.png'
			}, {
				id:3,
				title: 'Available on iPad',
				glyphicon: 'glyphicon-phone',
				image: 'assets/screenshots/pixmint3.png'
			}],
			download: 'https://itunes.apple.com/us/app/pixmint/id1084232768?mt=8'	
		}, {
			id: 2,
			title: 'Transposed',
			subtitle: 'Change the key tone of your chord progressions anytime, anywhere!',
			icon: 'transposed.png',
			contentClass: 'transposed-content',
			info: 'The singer needs another tone?',
			subInfo: `Transposed gives you piece of mind while you're playing live.`,
			screenshots: [{
				id:4,
				title: '',
				glyphicon: '',
				image: 'assets/screenshots/'
			}, {
				id:5,
				title: '',
				glyphicon: '',
				image: 'assets/screenshots/'
			}, {
				id:6,
				title: '',
				glyphicon: '',
				image: 'assets/screenshots/'
			}],
			download: 'https://itunes.apple.com/us/app/transposed/id1081133377?mt=8'	
		}, {
			id: 3,
			title: 'Chess Hourglass',
			subtitle: `Don't let time trickles through your fingers without notice.`,
			icon: 'hourglass.png',
			info: 'Check. Mate.',
			contentClass: 'chess-hourglass-content',
			subInfo: 'Chess Hourglass is an easy to use timer that makes you aware of how long your moves can be..',
			screenshots: [{
				id: 7,
				title: '',
				glyphicon: '',
				image: 'assets/screenshots/hourglass1.png'
			}, {
				id: 8,
				title: '',
				glyphicon: '',
				image: 'assets/screenshots/hourglass2.png'
			}, {
				id: 9,
				title: '',
				glyphicon: '',
				image: 'assets/screenshots/hourglass3.png'
			}],
			download: 'https://itunes.apple.com/vc/app/chess-hourglass/id1082128643?mt=8'
		}
	]);
};

// export const getApps = () => {
// 	return axios.get(`${process.env.PRYXMA_API}/apps`);
// };
