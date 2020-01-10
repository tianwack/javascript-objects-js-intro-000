var playlist = {
  'Slowdive': 'Alison',
  'My Bloody Valentine': 'Sometimes'
};

function updatePlaylist(playlist, artistName, songTitle){
  Object.assign({}, playlist, { [artistName]: songTitle})
  return playlist
}

updatePlayist(playlist, 'Phil Ochs', "Here's to the State of Mississippi");
