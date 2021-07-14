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

export default MediaPlayer;
