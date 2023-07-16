// songs = null;
songs =
[
    {
        title: "TOPLINE Feat. Tiger JK",
        artists: [{name: "Stray Kids"}, {name: "Tiger JK"}],
        duration: 204000
    }
];

function getSongsPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(songs) resolve(songs);
            reject("No songs data can be found.");
        }, 4000);
    });
}

getSongsPromise()
.then((songs) => {console.log(songs);})
.catch((error) => {console.error("Promise rejected.", error);})