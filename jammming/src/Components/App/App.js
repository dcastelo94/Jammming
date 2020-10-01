import React from 'react';
import './App.css';
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../util/Spotify";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            searchResults: [{name: "name1", artist: "artist1", album: "album1", id: 1}, 
            {name: "name2", artist: "artist2", album: "album2", id: 2}, 
            {name: "name3", artist: "artist3", album: "album3", id: 3} ],
            playlistName: "New Playlist",
            playlistTracks: [{name: "name1", artist: "artist1", album: "album1", id: 1}, 
            {name: "name2", artist: "artist2", album: "album2", id: 2}, 
            {name: "name3", artist: "artist3", album: "album3", id: 3}],
            isRemoval: false
        };
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
        this.savePlaylist = this.savePlaylist.bind(this);
        this.search = this.search.bind(this);
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

    updatePlaylistName(name) {
        this.setState({ playlistName: name });
    }

    savePlaylist() {
        const trackURIs = this.state.playlistTracks.map(track => track.uri);
    }

    search(term) {
        Spotify.search(term).then(searchResults => {
            this.setState({ searchResults: searchResults })
        });
    }

    render() {
        return ( 
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar onSearch={this.search} />
                    <div className="App-playlist">
                        <SearchResults searchResults={this.state.searchResults} 
                            isRemoval={this.state.isRemoval} onAdd={this.addTrack} />
                        <Playlist playlistName={this.state.playlistName} 
                            playlistTracks={this.state.playlistTracks} 
                            isRemoval={!this.state.isRemoval} 
                            onRemove={this.removeTrack} 
                            onNameChange={this.updatePlaylistName} 
                            onSave={this.savePlaylist} />
                    </div>
                </div>
            </div>
    );
  }
}

export default App;