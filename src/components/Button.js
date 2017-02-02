import React, { Component } from 'react';

class Button extends Component {
	render() {
		return <a href={ this.props.route } className="homepageButton">{ this.props.name }</a>
	}
}

export default Button;