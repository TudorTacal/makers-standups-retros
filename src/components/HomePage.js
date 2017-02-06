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
					<Button route="standups" name="S" />
					<Button route="retros" name="R" />
				</div>
			</div>
		)
	}
}

export default HomePage;
