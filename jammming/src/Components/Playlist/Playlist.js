import React from "react";
import TrackList from "../TrackList/TrackList";
import "./Playlist.css";

class Playlist extends React.Component {

  render() {
    return (
      <div className="Playlist">
        <input value="New Playlist"/>
        <TrackList tracks={this.props.playlistTracks} 
          isRemoval={this.props.isRemoval} onRemove={this.props.onRemove} />
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
};

export default Playlist;