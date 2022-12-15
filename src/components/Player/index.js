import { useState, useRef } from "react";
function Player({currentSong, prevTrack, nextTrack}) {
  const player = useRef(null);
  const [progress, setProgress] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  if(!currentSong){
    return null
  }
  return ( 
    <div>
      <audio ref={player}>
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
      <div class="buttons">
        <div class="prev-track" onClick={prevTrack}>
          <i class="fa fa-step-backward fa-2x">prev</i>
        </div>
        <div class="playpause-track" onclick="playpauseTrack()">
          <i class="fa fa-play-circle fa-5x">play</i>
        </div>
        <div class="next-track" onClick={nextTrack}>
          <i class="fa fa-step-forward fa-2x">next</i>
        </div>
      </div>
    </div>
  );
}

export default Player;