const playlist = [
    {
        id: "1",
        title: "ASAP",
        artist: "NewJeans",
        playcounts: 1,
        url: "https://open.spotify.com/track/5fpyAakgFOm4YTXkgfPzvV?si=f38d6d43ac684540"
    },
    {
        id: "2",
        title: "ETA",
        artist: "NewJeans",
        playcounts: 1,
        url: "https://open.spotify.com/track/56v8WEnGzLByGsDAXDiv4d?si=88a9dfe3d15541ec"
    },
    {
        id: "3",
        title: "Hall of Fame",
        artist: "Stray Kids",
        playcounts: 1,
        url: "https://open.spotify.com/track/5podb1asONjqwKk1iMVOeG?si=b7f1d068d3b64e6d"
    },
    {
        id: "4",
        title: "S-Class",
        artist: "Stray Kids",
        playcounts: 1,
        url: "https://open.spotify.com/track/3gTQwwDNJ42CCLo3Sf4JDd?si=931de142bf274b2a"
    },
    {
        id: "5",
        title: "GET LIT",
        artist: "Stray Kids",
        playcounts: 1,
        url: "https://open.spotify.com/track/7dqUVy6c69qzuAtIFbNeZ8?si=a952eaa1233444d7"
    }
];

function getPLaylist() {
    return playlist;
}

function getSongFromPlaylist(id) {
    const song = playlist.find((song) => song.id === id);
    return song;
}

module.exports = {
    getPLaylist,
    getSongFromPlaylist
}