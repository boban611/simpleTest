import './App.css';
import { useCallback, useEffect, useState } from 'react';
import SideBar from './components/SideBar';
import Player from './components/Player';

function App() {
  const [currentSong, setCurrentSong] = useState()
  return (
    <div className="App">
      <SideBar currentSong={currentSong} setCurrentSong={setCurrentSong}></SideBar>
      <Player currentSong={currentSong} setCurrentSong={setCurrentSong}></Player>
    </div>
  );
}

export default App;
