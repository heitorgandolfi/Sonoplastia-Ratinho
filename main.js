function play(idElementoAudio) {

    window.document.querySelector(idElementoAudio).play();

}

const keyList = window.document.querySelectorAll(".key");

for (let i = 0; i < keyList.length; i++) {

    const keys = keyList[i];
    const songAcess = keys.classList[1];
    const idSong = `#key_${songAcess}`;

    keys.onclick = function () {

        play(idSong);
    }
}