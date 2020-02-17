import React from 'react';
import SongList from '../components/SongList';

class SongContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: [],
      selectedSong: ''
    };
  //this.handleSongSelected = this.handleSongSelected.bind(this);
  }

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({songs: data.feed.entry}))
    .catch(err => console.error);
  }

  render(){

    return (

      <div className="main">
      <h2>This week's UK Top 20</h2>
        <SongList data={this.state.songs} />
        </div>
    );
  }
}

export default SongContainer;
