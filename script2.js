var currentlyPlayingAudio = null;

function createPlayButton(mp3Url) {
    var audioElement = new Audio(mp3Url);
    var buttonElement = document.createElement("button");
    buttonElement.className = "play-button";
    buttonElement.innerHTML = "Afspelen";
    buttonElement.classList.add("button-1");
    buttonElement.style.fontSize = "18px";
    buttonElement.style.padding = "30px";
    buttonElement.addEventListener("click", function() {
        if (currentlyPlayingAudio && currentlyPlayingAudio !== audioElement) {
            currentlyPlayingAudio.pause();
            currentlyPlayingAudio.previousElementSibling.innerHTML = "Afspelen";
        }
        if (audioElement.paused) {
            audioElement.play();
            buttonElement.innerHTML = "Pauzeren";
            currentlyPlayingAudio = audioElement;
        } else {
            audioElement.pause();
            buttonElement.innerHTML = "Afspelen";
            currentlyPlayingAudio = null;
        }
    });
    return buttonElement;
}

var mp3Urls = [
    "mp3_2e/1.m4a",
    "mp3_2e/2.m4a",
    "mp3_2e/3.m4a",
    "mp3_2e/4.m4a",
    "mp3_2e/5.m4a",
];

var h2Elements = document.querySelectorAll("h2");
for (var i = 0; i < h2Elements.length; i++) {
    var h2Element = h2Elements[i];
    var mp3Url = mp3Urls[i];
    var playButton = createPlayButton(mp3Url);
    h2Element.parentNode.insertBefore(playButton, h2Element.nextSibling);
}

