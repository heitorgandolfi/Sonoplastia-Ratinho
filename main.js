const btn = document.getElementsByTagName("button");
const song = document.getElementsByTagName("audio");

for (i = 0; i <= song.length; i++) {
    btn[i]?.addEventListener("click", playSong(i));
}

function playSong(i) {
    return () => {
        song[i].play();
    };
}