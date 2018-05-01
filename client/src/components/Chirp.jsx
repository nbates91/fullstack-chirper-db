import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Chirp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chirp: {},
		};
	}
	componentDidMount() {
		fetch(`api/chirps/${this.props.match.params.id}`)
			.then(res => {
				return res.json();
			})
			.then(chirp => {
				this.setState({ chirp });
			});
	}
	handleDel(id) {
		fetch(`/api/chirps/${id}`, {
			method: 'DELETE',
		})
			.then(this.props.history.replace('/'))
			.then(response => console.log('Success:', response))
			.catch(error => console.error('Error:', error));
	}

	render() {
		return (
			<React.Fragment>
				<div className="text-center">
					<Link className="homeBtn btn btn-success m-3 " to="/">
						Home
					</Link>
				</div>
				<div className="d-flex justify-content-center">
					<div className="card col-md-4" style={{ width: '40rem' }}>
						<div className="card-body">
							<button
								onClick={() => {
									this.handleDel(this.state.chirp.id);
								}}
								className="delBtn btn btn-success"
								style={{ marginLeft: '1rem' }}
							>
								X
							</button>
							<Link className="editBtn btn btn-success" to={`/update/${this.state.chirp.id}`}>
								Edit
							</Link>
							{/* <button
							onClick={() => {
								this.handlePut(this.state.chirp.id, this.state.chirp.user);
							}}
							className="putBtn btn btn-success"
						>
							Edit
						</button> */}
							<h5 className="card-title">@{this.state.chirp.userid}</h5>
							<p className="card-text">{this.state.chirp.text}</p>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
