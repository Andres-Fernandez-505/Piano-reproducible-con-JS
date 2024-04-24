const teclapiano = document.querySelectorAll(".tecla-piano .tecla"),
Volumen = document.querySelector(".Volumen input"),
Boton = document.querySelector("Boton input");

let AllKeys = []
audio = new Audio(`tunes/a.wav`) 

const playTune = (tecla) => {
    audio.src = `tunes/${tecla}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${tecla}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
}

teclapiano.forEach(tecla => {
    AllKeys.push(tecla.dataset.tecla);
    tecla.addEventListener("click", () => playTune(tecla.dataset.tecla));

});

const handleVolume = (e) => {
    teclapiano.forEach(tecla => tecla.classList.toggle("hide"));
}
const showHideKey = (e) => {
    teclapiano.forEach(tecla => tecla.classList.toggle("hide"));
}
const pressdKey = () => {
    if(teclapiano.includes(e.tecla)) playTune(e.tecla);
}

Boton.addEventListener("click", showHideKey);
Volumen.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressdKey);