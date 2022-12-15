import chillHop from '../../data'
import { useMemo } from 'react';
import SongItem from './SongItem';
function SideBar({currentSong, setCurrentSong}) {
  const songs = useMemo(() => {
    const data = chillHop()
    return data;
  }, [])
  return ( 
    <div className='sidebar'>
      <p>Library</p>
      {songs.map((song) => (
        <div key={song.id} onClick={e => setCurrentSong(song)}>
          <SongItem song={song} selected={song.id === currentSong?.id}></SongItem>
        </div>
      ))}
    </div>
   );
}

export default SideBar;