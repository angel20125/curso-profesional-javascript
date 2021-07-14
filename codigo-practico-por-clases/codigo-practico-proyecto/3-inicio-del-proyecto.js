////////////////////////////////
//  ==Prototype Media Player==
////////////////////////////////
// Prototype MediPlayer se encarga de controlar
// el video.

function MediaPlayer(object) {
	//Se está  enviado un objeto por los parámetros
	//que tiene un campo llamado param_video
	// en está linea se especifica que el objeto tiene
	// campo llamado param_video
	this.media = object.param_video;
}
MediaPlayer.prototype.play = function () {
	this.media.play();
};
MediaPlayer.prototype.pause = function () {
	this.media.pause();
};
MediaPlayer.prototype.togglePlay = function () {
	if (this.media.paused) {
		this.play();
	} else {
		this.pause();
	}
};
////////////////////////////////

//1. Se enlanza el elemento html "video" con js
//2. Se enlanza el elemento html "button" con js
//3. Instanciamos un objeto del prototype MediaPlayer
//4. Se define el método onclick en el button para pausar/reproducir el video
const video = document.querySelector('video'); //1.
const button = document.querySelector('button'); //2.
const player = new MediaPlayer({ param_video: video }); //3.

button.onclick = () => player.togglePlay();
