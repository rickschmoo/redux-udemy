import React, { Component } from 'react';

// const SearchBar = () => {
// 	return <input />
// };


// React component actions
// 1. functions
// 2. classes (enables state)

class SearchBar extends Component {

	constructor(props) {

		super(props);

		// state 
		// state change => component re-render
		this.state = {
			term: 'airfields'
		}
	}


	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

	// controlled form element
	// 1. initial value of input = state
	// 2. user enters text, updates state
	// 3. component re-renders, and input set to state
	render() {
		return (
			<div className="search-bar">
				<input 
					value={this.state.term}
					onChange={event =>
							this.onInputChange(event.target.value)}
				/>
			</div>
		);
	}

	// onInputChange(event) {
	// 	console.log(event.target.value);
	// 	console.log(event);
	// }
}

export default SearchBar;
