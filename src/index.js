import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const YOUTUBE_API_KEY='AIzaSyDX-9_zJuMQmVS4vLk-hF902XI43gHFCeo';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null
		}

		this.videoSearch('raf airfields');

	}

	videoSearch(term) {
		YTSearch(
			{key: YOUTUBE_API_KEY, term: term}, 
			(videos) => {
				console.log('RESPONSE FROM YT ' + videos);
				this.setState({
					videos: videos,
					selectedVideo: videos[0]
				});
			}
		);
	}

	render () {

		// debounce the search function so we only run every so often
		const debouncedVideoSearch = _.debounce((term) =>
			{this.videoSearch(term) }, 300);

		return(
			<div>
				<SearchBar
					onSearchTermChange={debouncedVideoSearch}
				/>
				<VideoDetail
					video={this.state.selectedVideo}
				/>
				<VideoList
					onVideoSelect={
						selectedVideo =>
							this.setState({selectedVideo})
					}
					videos={this.state.videos}
				/>
			</div>
		);	
	}
}

// Place component's generated HTML in DOM
ReactDOM.render(<App />, document.querySelector('.container'));
