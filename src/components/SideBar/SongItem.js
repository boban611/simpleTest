function SongItem({song, selected}) {
  return ( 
    <div className={selected ? "songItem selected": "songItem"}>
      <img src={song.cover} alt="logo" className="songItemImg"></img>
      <div className="songItemData">
        <p className="songItemName">{song.name}</p>
        <p className="songItemArtist">{song.artist}</p>
      </div>
    </div>
  );
}

export default SongItem;