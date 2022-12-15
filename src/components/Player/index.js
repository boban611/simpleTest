import { useState, useRef } from "react";
function Player({currentSong}) {
  const player = useRef(null);
  const [progress, setProgress] = useState(0);
  return ( 
    <div>
      <audio id="music_player" ref={player}>
        <source src={currentSong.audio}/>
      </audio>
      <img src={currentSong.cover} alt="logo" className="playerImg"></img>
      <p>{currentSong.name}</p>
      <p>{currentSong.artist}</p>
      <p>Player</p>
      <span>0:00</span>
      <input 
      type="range"
      min={0}
      max={100} 
      defaultValue={0}
      value={progress}
      onChange={e => {
        setProgress(e.target.value)
      }}></input>
      <span></span>
    </div>
  );
}

export default Player;