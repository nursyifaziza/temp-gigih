const express = require('express')
const { getSongFromPlaylist } = require('./model/playlist');
const { playSong } = require('./service/play_song');
const { getMostPlayedSorted } = require('./service/most_played');

const app = express();
const port = 3000;

app.get('/playlist/:id', (req, res) => {
    const id = req.params.id;
    const song = getSongFromPlaylist(id);

    try {
        playSong(id);
        res.status(200).json({
            success: true,
            data: {
                id,
                message: `${song.artist} – ${song.title} has been played for ${song.playcounts} time(s).`
            }
        })
    } catch (error) {
        res.status(500).json({Error: error.message});
    }
});

app.get('/playlist', (req, res) => {
    const mostPlayed = getMostPlayedSorted();
    res.status(200).json(mostPlayed);
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
});