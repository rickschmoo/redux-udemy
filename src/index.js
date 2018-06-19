import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

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

YTSearch(
	{key: YOUTUBE_API_KEY, term: 'airfields'}, 
	function(data) {
		console.log(data);
	}
);

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
