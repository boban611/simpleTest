function SongItem({song, selected}) {
  return ( 
    <div className={selected ? "songItem selected": "songItem"}>
      <img src={song.cover} alt="logo" className="songItemImg"></img>
      <div>
        <p>{song.name}</p>
        <p>{song.artist}</p>
      </div>
    </div>
  );
}

export default SongItem;