import React, { Component } from 'react';
import { Button, SplitButton, ButtonToolbar, MenuItem } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: this.props.items,
			search: "",
			element: "All",
			type: "All",
			filter_type: ""
		};
	}

	onSearch = (event) => {
		this.setState({
			search: event.target.value.trim().toLowerCase()
		});
	}

	filterItems = (item) => {
		if(this.state.filter_type === "Element") {
			if(item.element === this.state.element || item.sub_element === this.state.element) {
				return item.name.toLowerCase().search(this.state.search) != -1;
			} 
		} else if(this.state.filter_type === "Type") {
			if(item.type1 == this.state.type || item.type2 == this.state.type || item.type3 == this.state.type) {
				return item.name.toLowerCase().search(this.state.search) != -1;
			} 
		} else {
			return item.name.toLowerCase().search(this.state.search) != -1;
		}
	}

	handleElement = (event) => {
		this.setState({
			element: event,
			filter_type: "Element"
		});
	}

	handleType = (event) => {
		this.setState({
			type: event,
			filter_type: "Type"
		});
	}

	raritySort = (event) => {

		let sorted_array = [];
		
		sorted_array.push(this.state.data[0]);
		for (var i = 1; i < this.state.data.length; i++) {

	  		for(var j = 0; j < sorted_array.length; j++) {
	  			if(this.state.data[i].rarity > sorted_array[j].rarity) {
	  				sorted_array.splice(j, 0, this.state.data[i]);
	  				break;
	  			} 
	  		}

	  		if(i != sorted_array.length - 1) {
	  			console.log("add to end");
	  			sorted_array.push(this.state.data[i]);
	  		}
		}

		console.log(sorted_array.length);
		console.log(sorted_array);

		this.setState({
			data: sorted_array
		});
	}

	revert = (event) => {
		this.setState({
			data: this.props.items,
			search: "",
			element: "All",
			type: "All",
			filter_type: ""
		});
	}

	render() {
		return (
			<div className="filter-list">
				<h3><center>Search for Monster Data using the filtering tools below:</center></h3>

				<center>
	 				<SplitButton id="elementDropdown" title={"Filter by Element"}>
						<MenuItem eventKey="Dark" onSelect={this.handleElement}>Dark</MenuItem>
						<MenuItem eventKey="Light" onSelect={this.handleElement}>Light</MenuItem>
						<MenuItem eventKey="Fire" onSelect={this.handleElement}>Fire</MenuItem>
						<MenuItem eventKey="Wood" onSelect={this.handleElement}>Wood</MenuItem>
						<MenuItem eventKey="Water" onSelect={this.handleElement}>Water</MenuItem>
						<MenuItem eventKey="All" onSelect={this.handleElement}>All Element Types</MenuItem>
					</SplitButton>{' '}

	 				<SplitButton id="typeDropdown" title={"Filter by Type"}>
						<MenuItem eventKey="Dragon" onSelect={this.handleType}>Dragon</MenuItem>
						<MenuItem eventKey="Balanced" onSelect={this.handleType}>Balanced</MenuItem>
						<MenuItem eventKey="Physical" onSelect={this.handleType}>Physical</MenuItem>
						<MenuItem eventKey="Healer" onSelect={this.handleType}>Healer</MenuItem>
						<MenuItem eventKey="Attacker" onSelect={this.handleType}>Attacker</MenuItem>
						<MenuItem eventKey="God" onSelect={this.handleType}>God</MenuItem>
						<MenuItem eventKey="Devil" onSelect={this.handleType}>Devil</MenuItem>
						<MenuItem eventKey="Machine" onSelect={this.handleType}>Machine</MenuItem>
						<MenuItem eventKey="All" onSelect={this.handleType}>All Monster Types</MenuItem>
					</SplitButton>{' '}

					<Button onClick={this.raritySort}>Sort by Rarity</Button>{' '}

					<Button onClick={this.revert}>Show Full Monster List</Button>
				</center>

				<div class="search-group">
					<center><h3>Or seach for Monsters by name:</h3> 
					<input type="text" id="search" placeholder="Search for Monsters" onChange={this.onSearch} /></center>
				</div>

 				<p></p>

				<List items={this.state.data.filter(this.filterItems)} />
			</div>
		);
	}
}

export default FilteredList;