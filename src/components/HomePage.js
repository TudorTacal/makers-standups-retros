import React, { Component } from 'react';
import Layout from './Layout';
import Button from './Button';


class HomePage extends Component {
	render() {
		return (
			<div className="homePageContent">
				<div className="homePageLogo">
					<Layout />
				</div>
				<div className="homePageButtons">
					<Button route="/standup" name="New Stand Up" />
				</div>
			</div>
		)
	}
}

export default HomePage;