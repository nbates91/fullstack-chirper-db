import React, { Component } from 'react';
import Timeline from './Timeline';
import birdhouse from '../Assets/Birdhouse.png';

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

						<div className="row">
							<img src={birdhouse} className="mx-auto d-block" />
							{/* sourced from http://scribblenauts.wikia.com/wiki/File:Birdhouse.png */}
						</div>

						<br />
						<br />

						<h1 className="shadow display-5 text-center">Welcome to Chirper!</h1>

						<br />

						<p className="shadow lead text-center">Share your views with the world!</p>
					</div>
				</div>
				<Timeline />
			</React.Fragment>
		);
	}
}

export default Home;
