import React, { Component } from 'react';
import axios from 'axios';
import generateRandomId from '../helpers/randomIdAlgorithm'

class Button extends Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this)
	};

	handleClick(event){
		let url = this.props.route
		window.location.href = window.location.href + url + '/' + generateRandomId();
		event.preventDefault();
	};
	render() {
		return 	<a onClick={this.handleClick} href={ this.props.route } className="homepageButton">{ this.props.name }</a>

	}
}

export default Button;
