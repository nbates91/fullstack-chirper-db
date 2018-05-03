import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Chirp from './Chirp';
import Update from './Update';
import UserInfo from './UserInfo';
// import Timeline from './Timeline';

export default class App extends Component {
	render() {
		return (
			<Router>
				<React.Fragment>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/:id" component={Chirp} />
						<Route exact path="/update/:id" component={Update} />
						<Route exact path="/profile/:id" component={UserInfo} />
					</Switch>
				</React.Fragment>
			</Router>
		);
	}
}
