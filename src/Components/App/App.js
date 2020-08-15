import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component{
  render(){
    return (
      <div>
      <h1>San<span className="highlight">gee</span>t</h1>
      <div className="App">    
        <SearchBar />
        <div className="App-playlist">
               <SearchResults />
                <Playlist />
        </div>
      </div>
      </div>
    );
  }
}




export default App;
