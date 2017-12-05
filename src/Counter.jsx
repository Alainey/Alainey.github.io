import React, { Component } from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 1
		};
	}

	handleClick() {
		this.setState({
			count: this.state.count + 1
		});
	}

	render() {
		return (
			<button onClick={this.handleClick.bind(this)}>
				<h1>{this.state.count}</h1>
			</button>
		);
	}
}

export default Counter;