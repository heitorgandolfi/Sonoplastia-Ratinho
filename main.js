function play(idElement) {

    window.document.querySelector(idElement).play();

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
