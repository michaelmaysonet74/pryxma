'use strict';

import React from 'react';
import Section from './Section.jsx';
import Space from './Space.jsx';

class Athena extends React.Component {
	render () {
		return (
			<Section id="athena">
				{/* <AppHeader 
					title="Athena" 
					subtitle="Don't know the meaning of a word? Just ask!" 
					icon="bot.png" 
				/>
				<AppBody 
					info="Real. Intelligent."
					subInfo="Understands natural language expressions based on Wit.ai Machine Learning technology."
				/> */}
				<Space size={3} />
			</Section>
		);
	}
}

export default Athena;