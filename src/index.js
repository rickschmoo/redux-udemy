import React from 'react';
import ReactDOM from 'react-dom';

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
	return <div>
		Hi!
		<ol>
			<li>1</li>
			<li>2</li>			
			<li>3</li>
		</ol>
	</div>;
}

// Place component's generated HTML in DOM
ReactDOM.render(<App />, document.querySelector('.container'));
