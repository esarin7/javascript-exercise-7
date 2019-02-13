var button = document.userForm.submit;
submitButton.addEventListener("click", function(event) {
  event.preventDefault();

  var song = document.userForm.song.value;
  var artist = document.userForm.artist.value;
  var songURL = "https://api.lyrics.ovh/v1/" + artist + "/" + song;
  var lyricResults = document.getElementById("results");

  // //Fetch info from this URL
  fetch(songURL)
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.status);
      }
      return response.json();
    })
    .then(function(data) {
      //finally made it to the actual data
      var lyrics = data.lyrics.replace(/\n/g, "<br>");
      console.log(data);
      lyricResults.innerHTML = lyrics;
    });
});
