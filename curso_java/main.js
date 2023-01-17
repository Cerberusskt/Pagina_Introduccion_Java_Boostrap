let sound = new Audio('banda.mp3');

playBtn.addEventListener('click',()=>{
    sound.play();
});
pauseBtn.addEventListener('click',()=>{
    sound.pause();
});