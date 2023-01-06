const song = document.getElementsByTagName("audio");
let btns = document.getElementsByTagName("button");
btns = [...btns];

const a = btns.map((btn, i) => {
    btn.addEventListener("click", () => song[i].play())
})