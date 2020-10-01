import React from 'react';
import './App.css';
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            searchResults: [{name: "name1", artist: "artist1", album: "album1", id: 1}, 
            {name: "name2", artist: "artist2", album: "album2", id: 2}, 
            {name: "name3", artist: "artist3", album: "album3", id: 3} ],
            playlistName: "playlist1",
            playlistTracks: [{name: "name1", artist: "artist1", album: "album1", id: 1}, 
            {name: "name2", artist: "artist2", album: "album2", id: 2}, 
            {name: "name3", artist: "artist3", album: "album3", id: 3}],
            isRemoval: false
        };
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    addTrack(track) {
        let newTracks = this.state.playlistTracks;
        if (newTracks.find(savedTrack => savedTrack.id === track.id)) {
            return;
        }
        newTracks.push(track);
        this.setState({ playlistTracks: newTracks});
    }

    removeTrack(track) {
        const index = this.state.playlistTracks.map(item => item.id).indexOf(track.id);
        this.state.playlistTracks.splice(index, 1);
        let remTracks = this.state.playlistTracks;
        this.setState({ playlistTracks: remTracks });
    }

    render() {
        return ( 
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar />
                    <div className="App-playlist">
                        <SearchResults searchResults={this.state.searchResults} 
                            isRemoval={this.state.isRemoval} onAdd={this.addTrack} />
                        <Playlist playlistName={this.state.playlistName} 
                            playlistTracks={this.state.playlistTracks} 
                            isRemoval={!this.state.isRemoval} onRemove={this.removeTrack} />
                    </div>
                </div>
            </div>
    );
  }
}

export default App;