var playlist = {
  'Slowdive': 'Alison',
  'My Bloody Valentine': 'Sometimes'
};

function updatePlaylist(theplaylist, artistName, songTitle){
  Object.assign({}, theplaylist, { [artistName]: songTitle})
  return playlist
}

updatePlayist(playlist, 'Phil Ochs', "Here's to the State of Mississippi");
