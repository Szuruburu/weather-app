import React from 'react';

const AppTitle = 'Pogoda';

class Title extends React.Component {
	render() {
		return (
			<div>
				<h1>{ AppTitle }</h1>
				<p>Znajdź pogodę w swoim mieście</p>
			</div>
		);
	}
};


export default Title;
