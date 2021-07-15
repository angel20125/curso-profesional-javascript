////////////////////////////////
//  ==Prototype Media Player==
////////////////////////////////
// Prototype MediPlayer se encarga de controlar
// la reprodución de video

function MediaPlayer(config) {
	// config representa un objeto.
	//1. campo "el", representa video, y el video se asigna media
	//2. campo "plugins", reprsenta una lista de plugins
	// se encarga de activar
	this.media = config.el; //1.
	this.plugins = config.plugins || []; //2.

	this._initPlugins();
}

// Inicia cada plugin de la lista de plugins
MediaPlayer.prototype._initPlugins = function () {
	this.plugins.forEach((plugin) => {
		/*
            forEach recorre una lista (array) de plugins, con la
            finalidad de activar cada plugin. Todos los plugin deben
            tener un método run para ser activados. A cada plugin se le
            se le envia por argumentos el MediaPler quien
            está represetado por this esto significa que: a cada plugin
            se la pasa una referencia  del MediaPlayer
         */
		plugin.run(this);
	});
};

//reproduce el video
MediaPlayer.prototype.play = function () {
	this.media.play();
};

//detiene el video
MediaPlayer.prototype.pause = function () {
	this.media.pause();
};

//detiene/pausa el video dependiendo si el video está reproduciendose
MediaPlayer.prototype.togglePlay = function () {
	if (this.media.paused) {
		this.play();
	} else {
		this.pause();
	}
};

// desactiva el volumen del video
MediaPlayer.prototype.mute = function () {
	this.media.muted = true;
};

//activa el volumen del video
MediaPlayer.prototype.unmute = function () {
	this.media.muted = false;
};

//desactiva/activa el sonido del video
MediaPlayer.prototype.toggleMute = function () {
	this.media.muted = !this.media.muted;
};
////////////////////////////////

export default MediaPlayer;
