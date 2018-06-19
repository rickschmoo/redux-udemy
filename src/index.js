import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const YOUTUBE_API_KEY='AIzaSyDX-9_zJuMQmVS4vLk-hF902XI43gHFCeo';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			videos: []
		}
		YTSearch(
			{key: YOUTUBE_API_KEY, term: 'airfields'}, 
			(videos) => {
				console.log(videos);
				this.setState({
					videos
				});
			}
		);
	}

	render () {
		return(
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);	
	}
}

// Place component's generated HTML in DOM
ReactDOM.render(<App />, document.querySelector('.container'));
