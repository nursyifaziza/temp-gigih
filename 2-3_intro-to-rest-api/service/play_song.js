const { getSongFromPlaylist } = require('../model/playlist');

function playSong(id) {
    const song = getSongFromPlaylist(id);
    if (!song) {
        throw new Error('Song not found.')
    }    
    song.playcounts += 1;
}

module.exports = {
    playSong
}