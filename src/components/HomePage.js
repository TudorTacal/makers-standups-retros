import React, { Component } from 'react';
import Layout from './Layout';
import Button from './Button';


class HomePage extends Component {
	render() {
		return (
			<div>
				<Layout />
				<Button route="/standup" name="Start New Stand Up" />
			</div>
		)
	}
}

export default HomePage;