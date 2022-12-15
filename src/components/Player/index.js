import { useState, useRef, useCallback, useEffect } from "react";
function Player({currentSong, prevTrack, nextTrack}) {
  const updateTimer = useRef(null);
  const player = useRef(null);
  const [progress, setProgress] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
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

  const updateTime = useCallback(() => {
    let position = 0;
 
  if (!isNaN(player.current?.duration)) {
    position = player.current.currentTime * (100 / player.current.duration);
    setProgress(position)

    let currentMinutes = Math.floor(player.current.currentTime / 60);
    let currentSeconds = Math.floor(player.current.currentTime - currentMinutes * 60);
    

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
 
    setMinutes(currentMinutes)
    setSeconds(currentSeconds)
  }
  }, [player])

  useEffect(() => {
    if(currentSong && player.current){
      player.current.load()
      player.current.addEventListener("ended", nextTrack)
      updateTimer.current = setInterval(updateTime, 1000);
    }
  }, [currentSong, player, nextTrack, updateTime])

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
    <div className="player">

      <audio ref={player}>
        <source src={currentSong.audio}/>
      </audio>

      <img src={currentSong.cover} alt="logo" className="playerImg"></img>
      <p className="playerArtist">{currentSong.artist}</p>

      <p className="playerLabel">Player</p>

      <div className="timer">
        <span>0:00</span>
        <input 
        className="range"
        type="range"
        min={0}
        max={100} 
        value={progress}
        onChange={e => {
          setProgress(e.target.value)
        }}></input>
        {minutes} : {seconds}
      </div>

      <div className="buttons">
        <div className="button" onClick={prevTrack}>
          <i className="fa fa-step-backward fa-2x"></i>
        </div>
        <div className="button" onClick={togglePlaying}>
          <i className={playing ? "fa fa-pause-circle fa-2x" : "fa fa-play-circle fa-2x"}></i>
        </div>
        <div className="button" onClick={nextTrack}>
          <i className="fa fa-step-forward fa-2x"></i>
        </div>
      </div>

    </div>
  );
}

export default Player;