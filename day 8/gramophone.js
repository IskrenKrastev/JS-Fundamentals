function gramophone(arg1, arg2, arg3) {
  let bandName = arg1;
  let albumName = arg2;
  let songName = arg3;

  let secondForSong =
    (albumName.length * bandName.length * songName.length) / 2;
  let rorations = secondForSong / 2.5;

  console.log(`The plate was rotated ${Math.ceil(rorations)} times.`);
}
gramophone("Black Sabbath", "Paranoid", "War Pigs");
