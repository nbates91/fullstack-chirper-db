import React, { Component } from 'react';
// import 'isomorphic-fetch';
// import 'es6-promise';

export default class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userid: '',
			text: '',
			id: '',
		};
	}

	componentDidMount() {
		fetch('/api/chirps')
			.then(res => {
				return res.json();
			})
			.then(data => {
				this.setState({ userid: this.state.userid, text: this.state.text, id: data.nextid });
			});
	}
	handleuserid(value) {
		this.setState({ userid: value });
	}
	handleMessageVal(value) {
		this.setState({ text: value });
	}
	handlePost() {
		let chirpObj = {
			userid: 1,
			text: this.state.text,
			location: 'Somewhere, USA',
		};
		fetch('/api/chirps', {
			method: 'POST',
			body: JSON.stringify(chirpObj),
			headers: new Headers({
				'Content-Type': 'application/json',
			}),
		})
			.then(location.reload())
			.then(response => console.log('Success:', response))
			.catch(error => console.error('Error:', error));
	}
	render() {
		return (
			<React.Fragment>
				<div className="d-flex justify-content-center">
					<div className="col-sm-6 input-group mb-3">
						<div className="input-group-prepend">
							<span
								className="input-group-text bg-white text-success"
								style={{ border: 'solid', borderColor: 'darkgreen' }}
								id="basic-addon1"
							>
								@
							</span>
						</div>
						<input
							onChange={e => {
								this.handleuserid(e.target.value);
							}}
							type="text"
							className="form-control text-success"
							placeholder="Username"
							aria-label="Username"
							aria-describedby="basic-addon1"
							style={{ border: 'solid', borderColor: 'darkgreen' }}
						/>
					</div>
				</div>
				<div className="d-flex justify-content-center">
					<div className="input-group col-sm-6 mb-5">
						<div className="input-group-prepend" />
						<textarea
							onChange={e => {
								this.handleMessageVal(e.target.value);
							}}
							className="form-control bg-white text-success"
							aria-label="With textarea"
							placeholder="Say Something!"
							style={{ border: 'solid', borderColor: 'darkgreen' }}
						/>
						<button
							type="button"
							onClick={() => {
								this.handlePost();
							}}
							className="postBtn btn btn-success"
						>
							Post
						</button>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
