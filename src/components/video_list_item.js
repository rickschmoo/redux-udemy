 import React from 'react';

 const VideoListItem = ({video, onVideoSelect}) => {

 	// above argument is equivalent to 'const video=props.video;''
 	console.log(video);

 	const imageUrl = video.snippet.thumbnails.default.url;

 	return (
 		<li
 			className="list-group-item"
 			onClick={() => onVideoSelect(video)}>
 			<div className="video-list media">
 				<div className="media-left">
 					<img
 						className="media-object"
 						src={imageUrl}
 					/>
 				</div>
 				<div className="media_body">
 					<div className="media-heading">
 						{video.snippet.title}
 					</div>
 				</div>
 			</div>
 		</li>
 	);
 };

 export default VideoListItem;