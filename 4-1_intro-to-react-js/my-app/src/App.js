import './App.css';
import MostPlayedSong from './MostPlayedSong'
import Song from './Song'

function App() {
  const mostPlayedSongList = [
    {
      title: "Hall of Fame",
      image: "https://image.kpopmap.com/2023/05/stray-kids-5-star-online-album-cover-scaled.jpg",
      artist: "Stray Kids",
      duration: "2:51"
    },
    {
      title: "S-Class",
      image: "https://image.kpopmap.com/2023/05/stray-kids-5-star-online-album-cover-scaled.jpg",
      artist: "Stray Kids",
      duration: "3:15"
    },
    {
      title: "ITEM",
      image: "https://image.kpopmap.com/2023/05/stray-kids-5-star-online-album-cover-scaled.jpg",
      artist: "Stray Kids",
      duration: "3:11"
    },
    {
      title: "Super Bowl",
      image: "https://image.kpopmap.com/2023/05/stray-kids-5-star-online-album-cover-scaled.jpg",
      artist: "Stray Kids",
      duration: "3:03"
    },
    {
      title: "TOPLINE (Feat. Tiger JK)",
      image: "https://image.kpopmap.com/2023/05/stray-kids-5-star-online-album-cover-scaled.jpg",
      artist: "Stray Kids",
      duration: "3:24"
    }
  ];

  const songList= [
    {
      title: "DOMINO",
      image: "https://i1.sndcdn.com/artworks-CCC7hg84q7mc-0-t500x500.jpg",
      artist: "Stray Kids",
    },
    {
      title: "Slumberland",
      image: "https://i1.sndcdn.com/artworks-q0ohNPIjaY77-0-t500x500.jpg",
      artist: "King Gnu",
    },
    {
      title: "Freakin' Bad",
      image: "https://i.scdn.co/image/ab67616d0000b273f0b9b2e2a024d7d87a21ffed",
      artist: "Xdinary Heroes",
    },
    {
      title: "Backdoor",
      image: "https://i.scdn.co/image/ab67616d0000b27321fa0c8c53c48dcf3c6c1874",
      artist: "Stray Kids",
    },
    {
      title: "Regular",
      image: "https://upload.wikimedia.org/wikipedia/id/2/23/NCT_127_Regular_Irregular_cover.jpg",
      artist: "NCT 127",
    }
  ];

  return (
    <div className="App">
      <div className="most-played-songs">
        <h2>Most Played Songs</h2>
        {mostPlayedSongList.map((mostPlayedSongItem) => {
          return (
            <MostPlayedSong
              mostPlayedSongItem = {mostPlayedSongItem}
            />
          )
        })}
      </div>

      <div className="songs">
        <h2>All songs</h2>
        <div className="songs-wrapper">
        {songList.map((songItem) => {
          return (
            <Song
              songItem = {songItem}
            />
          )
        })}
        </div>
      </div>
    </div>
  );
}

export default App;
