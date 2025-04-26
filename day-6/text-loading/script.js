document.addEventListener("DOMContentLoaded", function () {
    let txt = "LOADING...";
    let loading_text = txt.split("");
    let loading_container = document.querySelector(".loader");

    loading_text.forEach(element => {
        let letter = document.createElement("span");
        letter.innerText = element;
        letter.classList.add("letter");
        loading_container.appendChild(letter);
    });

    let letters = document.querySelectorAll(".letter");
    anime({
        targets: letters,
        opacity: [0, 1],
        delay: anime.stagger(100),
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutQuad',
        duration: 1000
    });
});