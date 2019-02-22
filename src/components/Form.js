import React from 'react'

class Form extends React.Component {
	render () {
		return (
			<form onSubmit={this.props.getWeather}>
				<input type="text" name="city" placeholder="Miasto..."/>
				<input type="text" name="country" placeholder="Kraj..."/>
				<button>Pokaż pogodę</button>
			</form>
		);
	}
};

export default Form;
