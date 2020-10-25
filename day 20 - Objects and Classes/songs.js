function songs(arr) {
    let n = arr.shift();
    let wantedType = arr.pop();
    let songsArr = [];

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    for (let i = 0; i < n; i++) {
        let [typeList, name, time] = arr[i].split('_');

        let currentSong = new Song(typeList, name, time);

        songsArr.push(currentSong);

    }

    for (let song of songsArr) {
        if (song.typeList === wantedType || wantedType === 'all') {
            console.log(song.name);

        }
    }
}
songs([
    '3',
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
]);