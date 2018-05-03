import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class UserInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chirps: [],
			mentions: [],
			user: {},
		};
	}
	componentDidMount() {
		fetch(`/api/users/chirps/${this.props.match.params.id}`)
			.then(res => {
				return res.json();
			})
			.then(chirps => {
				this.setState({ chirps });
			});
		fetch(`/api/users/mentions/${this.props.match.params.id}`)
			.then(res => {
				return res.json();
			})
			.then(mentions => {
				this.setState({ mentions });
			});
		fetch(`/api/users/${this.props.match.params.id}`)
			.then(res => {
				return res.json();
			})
			.then(user => {
				this.setState({ user });
			});
	}
	handleUserChange() {
		location.reload();
	}
	render() {
		let chirps = this.state.chirps.map((chirp, index) => {
			return (
				<div
					className="card col-md-3"
					style={{ width: '15rem', border: 'solid', borderColor: 'darkgreen', margin: '0.4rem' }}
					key={index}
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
			);
		});
		let mentions = this.state.mentions.map((mention, index) => {
			return (
				<div
					className="card col-md-3"
					style={{ width: '15rem', border: 'solid', borderColor: 'darkgreen', margin: '0.4rem' }}
					key={index}
				>
					<div className="card-body">
						{/* <Link className="moreBtn btn btn-success" to={`/${mention.id}`}>
							...
						</Link> */}
						<Link
							className="card-text"
							to={`/profile/${mention.userid}`}
							onClick={() => {
								this.handleUserChange();
							}}
						>
							@{mention.username}
						</Link>
						{/* <h5 className="card-title">@{chirp.username}</h5> */}
						<p className="card-text">{mention.text}</p>
						<p className="card-text">Posted from: {mention.location}</p>
					</div>
				</div>
			);
		});
		return (
			<div className="container">
				<div className="text-center">
					<Link className="homeBtn btn btn-success m-3 " to="/">
						Home
					</Link>
				</div>
				<h1 className="text-center">Hello, {this.state.user.name}!</h1>
				<h1>Chirps you've written:</h1>
				<div className="row d-flex justify-content-center">{chirps}</div>
				<hr />
				<h1>Chirps you've been mentioned in:</h1>
				<div className="row d-flex justify-content-center">{mentions}</div>
			</div>
		);
	}
}
