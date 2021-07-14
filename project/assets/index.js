import MediaPlayer from './MediaPlayer.js';
//1. Se enlanza el elemento html "video" con js
//2. Se enlanza el elemento html "button" con js
//3. Instanciamos un objeto del prototype MediaPlayer
//4. Método onclick en el button para "pausar/reproducir" el video
const video = document.querySelector('video'); //1.
const button = document.querySelector('button'); //2.
const player = new MediaPlayer({ param_video: video }); //3.

button.onclick = () => player.togglePlay();
