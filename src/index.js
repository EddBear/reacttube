import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyAEhJ_gLarQ7-JCBxIquVV05vG7B_Aaoyw';

  class App extends Component {

    constructor(props){
      super(props);
      this.state = {
        videos: [],
        selectedVideo: null
       };

       this.videoSearch('doggo');
    }


    videoSearch(term){

      YTSearch ({ key: API_KEY, term: term}, (videos) => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
        console.log(videos);
      });

    }

    render(){

      /*This is a debounce version of the following function with 'Lodash'
       This will run until 300ms and execute the function videoSearch
       to prevent triggerin every keyword we type*/
      const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

      return (
        <div>
         <SearchBar onSearchTermChange={videoSearch}/>
         <VideoDetail video={this.state.selectedVideo}/>
         <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos} />
        </div>
      );
    }

  }

ReactDOM.render(<App /> , document.querySelector('.container'));
