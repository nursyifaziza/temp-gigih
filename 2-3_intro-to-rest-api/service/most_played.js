const { getPLaylist } = require('../model/playlist');

function getMostPlayedSorted() {
    const playlist = getPLaylist();
    playlist.sort((a, b) => parseInt(b.playcounts) -  parseInt(a.playcounts));
    return playlist;
}

module.exports = {
    getMostPlayedSorted
}