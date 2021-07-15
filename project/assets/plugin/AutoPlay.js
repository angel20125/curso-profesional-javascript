////////////////////////////////
//  ==Prototype Media Player==
////////////////////////////////
//pluing AutoPlay: Se encarga de auto repoducir el video

function AutoPlay() {}

// reproduce el video automáticamente,
AutoPlay.prototype.run = function (MediaPlayer) {
	/*
        El parámetro representa MediaPlayer,  por políticas
        de los navegadores sólo se puede reproducir video
        automáticamente en silencio. es por ello que:
         - primero se mutea al audio
         - segundo se reproduce el video
     */
	MediaPlayer.mute();
	MediaPlayer.play();
};
export default AutoPlay;

////////////////////////////////
