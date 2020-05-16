import React from "react";

import youtube from "./api/youtube";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  //calling 'onTermSubmit' will allow us to have a default video and video list as soon as the app is rendered
  componentDidMount() {
    this.onTermSubmit("animal crossing");
  }

  //For when we click on a video from our search list
  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };
  //For when we enter a value in our input, and we search
  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0] //[0] will give us the very first video that will appear on our search list as a display each time we search for a new term
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row" />
          <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              videos={this.state.videos}
              onVideoSelect={this.onVideoSelect}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

//videos that we recieve from youtibe api must be assign to our state

//videos in state wil allow our component to re-render and therefore allow us to render those videos onto the screen.
