import React from 'react';

import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{
  state = {videos : [], selectedVideo : null};

  componentDidMount(){
    this.onSearchSubmit('nature');
  }
  onSearchSubmit = async (term) =>{
    const resonse = await youtube.get('/search', {
      params:{
        q: term
      }
    });

    this.setState({videos : resonse.data.items, selectedVideo: resonse.data.items[0]});
  } 

  onVideoClick = (video) =>{
    this.setState({selectedVideo : video});
  }
  
  render(){
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="ten wide column">
            < VideoDetail video={this.state.selectedVideo }/>
            </div>
            <div className="six wide column">
            < VideoList videos={this.state.videos} onVideoClick={this.onVideoClick}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;