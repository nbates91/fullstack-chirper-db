import React, { Component } from 'react';
import InputForm from './Input';
import { Link } from 'react-router-dom';
// import 'isomorphic-fetch';
// import 'es6-promise';

export default class Timeline extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chirps: [],
		};
	}

	componentDidMount() {
		fetch('/api/chirps')
			.then(res => {
				return res.json();
			})
			.then(chirps => {
				this.setState({ chirps });
			});
	}

	render() {
		let chirps = this.state.chirps.map((chirp, index) => {
			return (
				<React.Fragment key={index}>
					<div
						className="card col-md-3"
						style={{ width: '15rem', border: 'solid', borderColor: 'darkgreen', margin: '0.4rem' }}
					>
						<div className="card-body">
							<Link className="moreBtn btn btn-success" to={`/${chirp.id}`}>
								...
							</Link>
							<Link className="card-text" to={`/profile/${chirp.userid}`}>
								@{chirp.username}
							</Link>
							{/* <h5 className="card-title">@{chirp.username}</h5> */}
							<p className="card-text">{chirp.text}</p>
							<p className="card-text">Posted from: {chirp.location}</p>
						</div>
					</div>
				</React.Fragment>
			);
		});
		return (
			<div>
				<InputForm message={value => {}} />
				<div className="row d-flex justify-content-center">{chirps}</div>
			</div>
		);
	}
}
