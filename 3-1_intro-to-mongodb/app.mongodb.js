const database = 'musicfy';
use (database);

db.createCollection("artists");
db.createCollection("songs");
db.createCollection("popular_songs");

const artists = [
    {
        name: "NewJeans",
        dateofbirth: "2022-07-22",
        genres: [
        "k-pop",
        "pop",
        "r&b"
        ]
    },
    {
        name: "Stray Kids",
        dateofbirth: "2018-03-25",
        genres: [
        "k-pop",
        "hip hop",
        "electronica",
        "pop"
        ]
    },
    {
        name: "Aimer",
        dateofbirth: "1990-07-09",
        genres: [
        "j-pop",
        "jazz",
        "pop rock"
        ]
    },
    {
        name: "Taylor Swift",
        dateofbirth: "1989-12-13",
        genres: [
        "pop",
        "country",
        "folk",
        "rock",
        "alternative"
        ]
    },
    {
        name: "TAEYONG",
        dateofbirth: "1995-07-01",
        genres: [
        "k-pop",
        "hip hop"
        ]
    },
    {
        name: "Fuuji Kaze",
        dateofbirth: "1997-06-14",
        genres: [
        "j-pop",
        "rock",
        "r&b"
        ]
    },
    {
        name: "LE SSERAFIM",
        dateofbirth: "2022-05-02",
        genres: [
        "k-pop",
        "r&b",
        "dance",
        "ballad"
        ]
    },
    {
        name: "NMIXX",
        dateofbirth: "2022-02-22",
        genres: [
        "k-pop",
        "hip hop",
        "rap"
        ]
    },
    {
        name: "NCT 127",
        dateofbirth: "2016-07-07",
        genres: [
        "k-pop",
        "hip hop",
        "r&b"
        ]
    },
    {
        name: "ATEEZ",
        dateofbirth: "2018-10-24",
        genres: [
        "k-pop",
        "hip hop",
        "trap",
        "EDM"
        ]
    }
];

const songs = [
    {
        title: "New Jeans",
        artist_name: "NewJeans",
        album: "NewJeans 2nd EP 'Get Up'"
    },
    {
        title: "Super Shy",
        artist_name: "NewJeans",
        album: "NewJeans 2nd EP 'Get Up'"
    },
    {
        title: "Hall of Fame",
        artist_name: "Stray Kids",
        album: "5-STAR"
    },
    {
        title: "S-Class",
        artist_name: "Stray Kids",
        album: "5-STAR"
    },
    {
        title: "ITEM",
        artist_name: "Stray Kids",
        album: "5-STAR"
    },
    {
        title: "404 File Not Found",
        artist_name: "TAEYONG",
        album: "SHALALA - The 1st Mini Album"
    },
    {
        title: "Ay-Yo",
        artist_name: "NCT 127",
        album: "Ay-Yo - The 4th Album Repackage"
    },
    {
        title: "Skyscraper",
        artist_name: "NCT 127",
        album: "Ay-Yo - The 4th Album Repackage"
    },
    {
        title: "Eve, Psyche & The Bluebeard's Wife",
        artist_name: "LE SSERAFIM",
        album: "UNFORGIVEN"
    },
    {
        title: "Sour Grapes",
        artist_name: "LE SSERAFIM",
        album: "FEARLESS"
    },
];

const popular_songs = [
    {
        songs_title: "NewJeans",
        playcounts: 22603198,
        period: "2023-07-07 - 2023-07-21"
    },
    {
        songs_title: "Super Shy",
        playcounts: 45306995,
        period: "2023-07-07 - 2023-07-21"
    },
    {
        title: "Hall of Fame",
        playcounts: 18643272,
        period: "2023-06-02 - 2023-07-21"
    },
    {
        title: "S-Class",
        playcounts: 62888753,
        period: "2023-06-02 - 2023-07-21"
    },
    {
        title: "ITEM",
        playcounts: 16074220,
        period: "2023-06-02 - 2023-07-21"
    },
    {
        title: "404 File Not Found",
        playcounts: 1092585,
        period: "2023-06-05 - 2023-07-21"
    },
    {
        title: "Ay-Yo",
        playcounts: 17907460,
        period: "2023-01-30 - 2023-07-21"
    },
    {
        title: "Skyscraper",
        playcounts: 3903994,
        period: "2023-01-30 - 2023-07-21"
    },
    {
        title: "Eve, Psyche & The Bluebeard's Wife",
        playcounts: 51095243,
        period: "2023-05-01 - 2023-07-21"
    },
    {
        title: "Sour Grapes",
        playcounts: 101842880,
        period: "2022-05-02 - 2023-07-21"
    },
];

db.artists.insertMany(artists);
db.artists.insertMany(songs);
db.artists.insertMany(popular_songs);
