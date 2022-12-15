import SongItem from './SongItem';
function SideBar({currentSong, setCurrentSong, songs}) {
  
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