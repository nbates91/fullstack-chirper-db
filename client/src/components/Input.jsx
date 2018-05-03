import React, { Component } from 'react';
// import 'isomorphic-fetch';
// import 'es6-promise';

export default class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userid: null,
			username: '',
			text: '',
			location: '',
			mentionsUserId: null,
		};
	}

	componentDidMount() {
		fetch('/api/chirps')
			.then(res => {
				return res.json();
			})
			.then(data => {
				this.setState({
					userid: this.state.userid,
					text: this.state.text,
					location: this.state.location,
					id: data.nextid,
				});
			});
	}
	handleuserid(value) {
		this.setState({ userid: value });
	}
	handleUsername(value) {
		this.setState({ username: value });
	}
	handleMessageVal(value) {
		this.setState({ text: value });
	}
	handleLocation(value) {
		this.setState({ location: value });
	}
	handlePost() {
		fetch(`/api/users/user/${this.state.username}`)
			.then(res => {
				return res.json();
			})
			.then(id => this.setState({ userid: id.id }))
			.then(() => {
				let string = this.state.text;
				if (string.match(/[@]/)) {
					let splitString = string.split(' ');
					for (let i = 0; i < splitString.length; i++) {
						if (splitString[i].match(/[@]/)) {
							let stringArr = splitString[i].split(/[@]/);
							let name = stringArr[1];
							fetch(`/api/users/user/${name}`)
								.then(res => {
									return res.json();
								})
								.then(id => this.setState({ mentionsUserId: id.id }))
								.then(() => {
									let chirpObj = {
										userid: this.state.userid,
										text: this.state.text,
										location: this.state.location,
									};

									fetch(`/api/mentions/${this.state.mentionsUserId}`, {
										method: 'POST',
										body: JSON.stringify(chirpObj),
										headers: new Headers({
											'Content-Type': 'application/json',
										}),
									})
										.then(location.reload())
										.then(response => console.log('Success:', response))
										.catch(error => console.error('Error:', error));
								});
						}
					}
				} else {
					let chirpObj = {
						userid: this.state.userid,
						text: this.state.text,
						location: this.state.location,
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
			})

			.catch(err => {
				if (err) {
					alert('That user does not exist!');
				}
			});
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
								this.handleUsername(e.target.value);
							}}
							type="text"
							className="form-control text-success"
							placeholder="Username"
							aria-label="Username"
							aria-describedby="basic-addon1"
							style={{ border: 'solid', borderColor: 'darkgreen' }}
						/>
					</div>
					<div>
						<input
							onChange={e => {
								this.handleLocation(e.target.value);
							}}
							type="text"
							className="form-control text-success"
							placeholder="Location"
							aria-label="Location"
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
