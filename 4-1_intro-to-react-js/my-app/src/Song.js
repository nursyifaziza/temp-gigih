function Song({songItem}) {
    return(
        <div className="song">
            <img src={songItem.image} alt=""/>
            <p className="title">{songItem.title}</p>
            <p>{songItem.artist}</p>
            <a href="#" className="menu"><i className="fa-solid fa-ellipsis"></i></a>
        </div>
    );
}

export default Song;