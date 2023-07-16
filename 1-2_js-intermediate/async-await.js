// songs = null;
songs =
[
    {
        title: "TOPLINE Feat. Tiger JK",
        artists: [{name: "Stray Kids"}, {name: "Tiger JK"}],
        duration: 204000
    }
];

const songsPromise = time => new Promise((resolve, reject) => {
    setTimeout(() => {
        if(songs) resolve(songs);
        reject("No songs data can be found.");
    }, time);
});

async function getSongsAsync() {
    try {
        console.log("The first line inside getSongsAsync()");
        const songs = await songsPromise(4000);
        console.log(songs);
        console.log("The last line (after await) inside getSongsAsync()");
    } catch (error) {
        console.log(error);
    }
}

getSongsAsync();