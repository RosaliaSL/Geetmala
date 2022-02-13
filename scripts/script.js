let track_video = document.querySelector('#track_video');
let index_no = 0;
let playing_video = false;
let theme_title = document.querySelector('#theme-title');
//All videos list
let all_videos = [
    {
        name: "romance",
        path: "videos/romance.mov",
    },
    {
      name: "sad",
      path: "videos/sad.mp4",
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
    track_video.src = all_videos[index_no].path;
    theme_title.innerHTML = all_videos[index_no].name;
 }

 load_theme(index_no);