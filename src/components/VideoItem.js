import React from 'react';
import './VideoItem.css';

class VideoItem extends React.Component{

  onVideoClicked = (event) => {
    event.preventDefault();
    this.props.onVideoClick(this.props.video);
  }

  render(){
    console.log(this.props.video);
    return (
      <div className="video-item item" onClick={this.onVideoClicked}>
        <div className="ui image">
        <img src={this.props.video.snippet.thumbnails.medium.url} 
        alt={this.props.video.snippet.title}/>
        </div>
        <div className="content">
          <div className="header">
          {this.props.video.snippet.title}
          </div>
        </div>
      </div>
    );
  }
}

export default VideoItem;