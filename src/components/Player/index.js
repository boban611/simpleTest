import { useState, useRef, useCallback, useEffect } from "react";
function Player({currentSong, prevTrack, nextTrack}) {
  const updateTimer = useRef(null);
  const player = useRef(null);
  const [progress, setProgress] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [totalMinutes, setTotalMinutes] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [playing, setPlaying] = useState(false)

  const togglePlaying = useCallback(
    () => {
      const temp = !playing
      setPlaying(temp)
      if(temp){
        player.current.play()
      }
      else{
        player.current.pause()
      }
    },
    [playing, player],
  )

  useEffect(() => {
    if(currentSong && player){
      player.current.load()
      player.current.addEventListener("ended", nextTrack)
      updateTimer.current = setInterval(updateTime, 1000);

      let durationMinutes = Math.floor(player.current.duration / 60);
      let durationSeconds = Math.floor(player.current.duration - durationMinutes * 60);

      if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
      if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

      setTotalMinutes(durationMinutes)
      setTotalSeconds(durationSeconds)
    }
  }, [currentSong, player, nextTrack])

  const updateTime = () => {
    let position = 0;
 
  if (!isNaN(player.current.duration)) {
    position = player.current.currentTime * (100 / player.current.duration);
    setProgress(position)

    let currentMinutes = Math.floor(player.current.currentTime / 60);
    let currentSeconds = Math.floor(player.current.currentTime - currentMinutes * 60);
    

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
 
    setMinutes(currentMinutes)
    setSeconds(currentSeconds)
  }
  }

  useEffect(() => {
    if(player.current){
      const timeTo = player.current.duration * progress / 100;
      player.current.currentTime = timeTo
    }
  }, [progress, player])

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
      value={progress}
      onChange={e => {
        setProgress(e.target.value)
      }}></input>
      <span>{minutes} : {seconds}</span>

      <div className="buttons">
        <div className="button" onClick={prevTrack}>
          <i className="fa fa-step-backward fa-2x">prev</i>
        </div>
        <div className="button" onClick={togglePlaying}>
          <i className="fa fa-play-circle fa-5x">{playing ? "Paues" : "Play"}</i>
        </div>
        <div className="button" onClick={nextTrack}>
          <i className="fa fa-step-forward fa-2x">next</i>
        </div>
      </div>

    </div>
  );
}

export default Player;