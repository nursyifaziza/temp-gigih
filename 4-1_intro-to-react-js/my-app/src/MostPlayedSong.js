function MostPlayedSong({mostPlayedSongItem}) {
    return(
        <div className="most-played-song">
            <p>1</p>
            <div className="title">
                <img src={mostPlayedSongItem.image} alt=""/>
                <span>{mostPlayedSongItem.title}</span>
            </div>
            <p className="artist">{mostPlayedSongItem.artist}</p>
            <p>{mostPlayedSongItem.duration}</p>
            <a href="#" className="menu"><i className="fa-solid fa-ellipsis"></i></a>
        </div>
    );
}

export default MostPlayedSong;