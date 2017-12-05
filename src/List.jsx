import React, { Component } from 'react';
import Monster from './Monster';

class List extends Component {
	renderList() {

		const items = this.props.items.map(item => {
			return (
				<li key={item.name}>
					<Monster monster={item} />
				</li>
			); 
		});

		return items;
	}

	render() {
		return (
			<ul>
				{this.renderList()}
			</ul>
		);
	}
}

export default List;