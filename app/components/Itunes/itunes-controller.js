import ItunesService from "./itunes-service.js";
//Private
const itunesService = new ItunesService()

function drawSongs() {
  //changes button back to GET MUSIC once songs are loaded
  document.querySelector('#get-music-button').textContent = 'GET MUSIC'
  let songs = itunesService.Songs
  let template = ''
  songs.forEach(s => {
    if (s.kind == "song") {
      template += s.getTemplate()
    }
  });
  document.getElementById('available-songs').innerHTML = template
}
function logSongs() {
  console.log("Song UPDATED")
}



//PUBLIC
class ItunesController {
  constructor() {
    //BE SURE TO REGISTER YOUR SUBSCRIBERS!!!!!!!

    itunesService.addSubscriber('songs', drawSongs)
    itunesService.addSubscriber('songs', logSongs)
    drawSongs()
  }



  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    document.querySelector('#get-music-button').textContent = 'LOADING....'
    itunesService.getMusicByArtist(artist)

  }


  play(url) {

    document.getElementById('audioPlayer').setAttribute('src', url)
  }

}


export default ItunesController