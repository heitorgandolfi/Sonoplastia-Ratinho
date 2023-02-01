const song = document.querySelectorAll("audio");
const btns = document.querySelectorAll("button");

btns.forEach((btn, i) => btn.addEventListener("click", () => song[i].play()));
