import React, { Component } from 'react';
import Timeline from './Timeline';

class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<div
					className="jumbotron jumbotron-fluid bg-success text-white"
					style={{ border: 'solid', borderColor: 'darkgreen' }}
				>
					<div className="container">
						<div className="text-center">
							<img src="" alt="" className="rounded" />
						</div>

						<br />
						<br />

						<h1 className="shadow display-5">Welcome to Chirper!</h1>
						<br />
						<p className="shadow lead text-center">
							Share your views with the world.. <br />
						</p>
						<p className="shadow lead text-right">...even if the world could care less.</p>
					</div>
				</div>
				<Timeline />
			</React.Fragment>
		);
	}
}

export default Home;
