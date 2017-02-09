import React, { Component } from 'react';
import Layout from './Layout';
import Button from './Button';


class HomePage extends Component {
	render() {
		return (
			<div className="homePageContent">
				<div className="header">
					<Layout />
				</div>
				<div className="homePageButtons">
					<Button title="standupButton" route="standups" name="S" />
					<Button title="retroButton" route="retros" name="R" />
				</div>
			</div>
		)
	}
}

export default HomePage;
