let track_video = document.querySelector('#track_video');
let global_index_no = 0;
let playing_song = false;
let playing_video = false;
let theme_title = document.querySelector('#theme-title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show')
let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let volume_icon = document.querySelector('#volume_icon');
let pause_gif = document.querySelector('#pause-gif');
let pause_text = document.querySelector('#pause-text');

//create a audio Element
let track = document.createElement('audio');
let global_music_index = 0;

let isMuted = false;

//All videos list
let all_videos = [
    {
        name: "romance",
        path: "videos/romance.mov",
        music: ["music/romance/Lag Jaa Gale - Sadhana, Lata Mangeshkar, Woh Kaun Thi Romantic Song.mp3", 
                "music/romance/Tujhe Dekha Toh Song _ Dilwale Dulhania Le Jayenge _ Shah Rukh Khan, Kajol _ Lata, Kumar Sanu _ DDLJ.mp3",
                "music/romance/Humein Tumse Pyar Kitna _ Sanam.mp3",
                "music/romance/Chura Liya Hai Tumne Jo Dil Ko (Eng Sub) [Full Video Song] (HD) With Lyrics - Yaadon Ki Baaraat.mp3",
                "music/romance/Tum Aa Gaye Ho Noor Aa Gaya Hai _ Lata Mangeshkar, Kishore Kumar _ Aandhi 1975 Songs _ Sanjeev Kumar.mp3",
                "music/romance/Ek Ladki ko dekha - Full Video HD _ 1942 A love story _ Anil Kapoor _ Manisha Koirala.mp3",
                "music/romance/Barsaat - Bheegi Bheegi Raaton Mein_Adnan Sami_Kabhi To Nazar Milao.mp3",
                "music/romance/Kora Kagaz Tha Yeh Man Mera 4K Video Song _ Lata Mangeshkar_ Kishore Kumar _ Aradhana_ Rajesh Khanna.mp3",
                "music/romance/Aap Ki Ankhon Mein Kuch - Kishore Kumar, Lata Mangeshkar, Ghar Romantic Song.mp3",
                "music/romance/Likhe Jo Khat Tujhe Woh Teri Yaad Mein  [HD] 1080P.mp3"
            ]
    },
    {
        name: "sad",
        path: "videos/sad.mp4",
        music: ["music/sad/Lagi Aaj Sawan Ki Phir Wo Jhadi Hai.mp3",
               "music/sad/Tere Bina Zindagi Se - Aandhi [1975] (Original)  - Lata Mangeshkar - Kishore Kumar.mp3", 
                "music/sad/Kya Hua Tera Wada in HD.mp3",
                "music/sad/Meri bheegi bheegi si ( Anamika) Kishor Kumar Full hd video Song 2021 #kishorkumar.mp3",
                "music/sad/Lata Mangeshkar - Kahin Door Jab Din Dhal Jaye (Official Audio).mp3",
                "music/sad/ये जो मोहब्बत है  - Yeh Jo Mohabbat Hai 4K Video Song _ राजेश खन्ना - किशोर कुमार _ Kati Patang Song.mp3",
                "music/sad/aaja piya tohe pyar du_Baharon Ke Sapne1967_AshaParekh& Rajesh Khanna_Lata_Majrooh_R D Burman _a tri.mp3",
                "music/sad/Tujhse Naraaz Nahin Zindagi (Male) _ Masoom _ Naseeruddin Shah _ Jugal Hansraj _ #TujhseNaraazNahin.mp3",
                "music/sad/Guide 1965 Din dhal jaye hai raat na.mp3",
                "music/sad/Jis Gali Mein Tera Ghar 4K Song _ Mukesh _ Rajesh Khanna _ Kati Patang _Classic Bollywood Video Song.mp3",
                "music/sad/Jis Gali Mein Tera Ghar 4K Song _ Mukesh _ Rajesh Khanna _ Kati Patang _Classic Bollywood Video Song.mp3"
        ]
    },
    {
        name: "happy",
        path: "videos/happy.mp4",
        music: ["music/Camélia_Jordana_Moi_c_est.mp3",
                "music/Danish_Girl_(getmp3.pro).mp3"]
    },
    {
        name: "sufi",
        path: "videos/sufi.mp4",
        music: ["music/Camélia_Jordana_Moi_c_est.mp3",
                "music/Danish_Girl_(getmp3.pro).mp3"]
    },
    {
        name: "ghazal",
        path: "videos/ghazal.mp4",
        music: ["music/Camélia_Jordana_Moi_c_est.mp3",
                "music/Danish_Girl_(getmp3.pro).mp3"]
    }
 ];

function load_track(index_no, music_index) {
    track.src = all_videos[index_no].music[music_index];
}

function load_theme(index_no, music_index) {
    global_index_no = index_no;
    global_music_index = music_index;
    pause_gif.style.display = 'none';
    pause_text.style.display = 'none';
    playing_song = true;
    load_track(index_no, music_index);
    track_video.src = all_videos[index_no].path;
    theme_title.innerHTML = all_videos[index_no].name;
    justplay();
 }

load_theme(global_index_no, global_music_index);

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
    pause_gif.style.display = 'none';
    pause_text.style.display = 'none';
  }
  
  //pause song
  function pausesong(){
      track.pause();
      playing_song = false;
      play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
      pause_gif.style.display = 'initial';
      pause_text.style.display = 'initial';
  }

// reset song slider
function reset_slider(){
    slider.value = 0;
}

// change volume
function volume_change(){
	track.volume = recent_volume.value / 100;
}

// next song
function next_song(){
    if(global_music_index < all_videos[global_index_no].music.length - 1){
		global_music_index += 1;
		load_track(global_index_no, global_music_index);
		playsong();
	}else{
		global_music_index = 0;
		load_track(global_index_no, global_music_index);
		playsong();
	}
}

// previous song
function previous_song(){
	if(global_music_index > 0){
		global_music_index-= 1;
		load_track(global_index_no, global_music_index);
		playsong();

	}else{
		global_music_index = all_videos[global_index_no].music.length - 1;
		load_track(global_index_no, global_music_index);
		playsong();
	}
}
