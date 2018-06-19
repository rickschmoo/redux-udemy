import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const YOUTUBE_API_KEY='AIzaSyDX-9_zJuMQmVS4vLk-hF902XI43gHFCeo';

// Create new component to produce HTML
// const App = function() {
// 	return <div>
// 		Hi!
// 		<ol>
// 			<li>1</li>
// 			<li>2</li>			
// 			<li>3</li>
// 		</ol>
// 	</div>;
// }

const App = () => {
	return (
		<div>
			Hi!
			<ol>
				<li>1</li>
				<li>2</li>			
				<li>3</li>
			</ol>
			<SearchBar />
		</div>
	);	
}

// Place component's generated HTML in DOM
ReactDOM.render(<App />, document.querySelector('.container'));
