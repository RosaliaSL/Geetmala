let track_video = document.querySelector('#track_video');
let index_no = 0;
let playing_song = false;
let playing_video = false;
let theme_title = document.querySelector('#theme-title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show')
let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let volume_icon = document.querySelector('#volume_icon')

//create a audio Element
let track = document.createElement('audio');

let isMuted = false;

//All videos list
let all_videos = [
    {
        name: "romance",
        path: "videos/romance.mov",
        music: "music/Camélia_Jordana_Moi_c_est.mp3"
    },
    {
      name: "sad",
      path: "videos/sad.mp4",
      music: "music/Danish_Girl_(getmp3.pro).mp3"
    },
    {
        name: "happy",
        path: "videos/happy.mp4",
    },
    {
        name: "sufi",
        path: "videos/sufi.mp4",
    },
    {
        name: "ghazal",
        path: "videos/ghazal.mp4",
    }
 ];

 function load_theme(index_no) {
    playing_song = true;
    track.src = all_videos[index_no].music;
    track_video.src = all_videos[index_no].path;
    theme_title.innerHTML = all_videos[index_no].name;
    justplay();
 }

 load_theme(index_no);

 //mute sound function
function mute_sound(){

	track.volume = 0;
	recent_volume.value = 0;
    volume_icon.innerHTML = '<i class="fa fa-volume-xmark" aria-hidden="true"></i>';
}

function unmute_sound() {
    track.volume = 1;
    recent_volume.value = 100;
   
    volume_icon.innerHTML = '<i class="fa fa-volume-up" aria-hidden="true"></i>'
}

function toggle_mute() {
    if (isMuted) {
        unmute_sound();
    } else {
        mute_sound();
    }
    isMuted = !isMuted;
}

// checking.. the song is playing or not
function justplay(){
    if(playing_song==false){
        playsong();

    }else{
        pausesong();
    }
}

// play song
function playsong(){
    track.play();
    playing_song = true;
    play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
  }
  
  //pause song
  function pausesong(){
      track.pause();
      playing_song = false;
      play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
  }

// reset song slider
function reset_slider(){
    slider.value = 0;
}
  // change volume
function volume_change(){
	track.volume = recent_volume.value / 100;
}
