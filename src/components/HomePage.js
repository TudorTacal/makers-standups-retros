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
					<Button route="standups" name="New Stand Up" />
					<Button route="retros" name="New Retro" />
				</div>
			</div>
		)
	}
}

export default HomePage;
