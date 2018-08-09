const player =  document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressFill =  document.querySelector('.progress__filled');
const skipButtons   = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player__slider');
const playBtn  = document.querySelector('.toggle ')
let playing = false;


function togglePlay(){
    playing = !playing;
    playing ? video.play() : video.pause();
    if(playing){
        playBtn.innerHTML = ` <span class="icon-pause"> <i class="fas fa-pause"></i></span> `
    }else{
        playBtn.innerHTML = `<span class="icon-play"> <i class="fas fa-play"></i></span> `
    }

}



// 點擊video 空白鍵  按鈕
video.addEventListener('click',togglePlay);
playBtn.addEventListener('click',togglePlay);
window.addEventListener('keydown', (e)=>{
    if(e.keyCode !== 32) return;
    togglePlay();
});

