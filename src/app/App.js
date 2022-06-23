import React from 'react';
import './App.css';
import {Header} from "../components/header/Header.js"
import {Subreddit} from "../features/subreddit/Subreddit.js"
import {Feed} from "../features/feed/Feed.js"

function App() {
  ///Creating simple display with one header, a main central feed, and a side menu with subreddits
  return (
    <div className="App">
      <Header />
      <div id="mainContainer">
        <Feed />
        <Subreddit />
      </div>
      
    </div>
  );
}

export default App;
