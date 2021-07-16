import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugin/AutoPlay.js';

//1. Se enlanza el elemento html "video" con js
//2. Se enlanza el elemento html "playButton" con js
//3. Se enlanza el elemento html "muteButton" con js
//4. Instanciamos un objeto del prototype MediaPlayer
//5. Método onclick en el button para "pausar/reproducir" el video

const video = document.querySelector('video'); //1.
const playButton = document.querySelector('#playButton'); //2.
const muteButton = document.querySelector('#muteButton'); //3.
const player = new MediaPlayer({
	el: video,
	//plugins: [new AutoPlay()],
});

// pausar/reproducir el video
playButton.onclick = () => player.togglePlay();
// activar/desctivar el video
muteButton.onclick = () => player.toggleMute();
