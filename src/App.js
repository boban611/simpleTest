import './App.css';
import chillHop from './data'
import { useCallback, useMemo, useState } from 'react';
import SideBar from './components/SideBar';
import Player from './components/Player';

function App() {
  const songs = useMemo(() => {
    const data = chillHop()
    return data;
  }, [])
  const [currentSong, setCurrentSong] = useState()

  const prevTrack = useCallback(() => {
    let index = songs.findIndex(item => item.id === currentSong.id)
    if(index === 0) return
    else setCurrentSong(songs[index - 1])   
  }, [songs, currentSong])

  const nextTrack = useCallback(() => {
    let index = songs.findIndex(item => item.id === currentSong.id)
    if(index === songs.length) return
    else setCurrentSong(songs[index + 1])   
  }, [songs, currentSong])
  return (
    <div className="App">
      <SideBar currentSong={currentSong} setCurrentSong={setCurrentSong} songs={songs}></SideBar>
      <Player currentSong={currentSong} prevTrack={prevTrack} nextTrack={nextTrack}></Player>
    </div>
  );
}

export default App;
