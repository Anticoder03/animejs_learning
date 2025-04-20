// Timeline for the loading dots
const loading = anime.timeline({
  loop: 3,
  complete: function () {
    // Fade out dots
    anime({
      targets: ".dot",
      opacity: 0,
      duration: 500,
      easing: "easeInOutQuad",
      complete: showCharacterAnimation // Trigger character animation
    });
  }
});

loading.add({
  targets: ".dot",
  translateY: [0, -50, 0],
  easing: "easeInOutSine",
  duration: 1000,
  delay: anime.stagger(100, { start: 500 })
});

// Show and animate the character
function showCharacterAnimation() {
  // Display the character container
  document.querySelector(".character").style.display = "block";

  anime.timeline()
    .add({
      targets: ".head",
      translateY: [-100, 0],
      opacity: [0, 1],
      duration: 800,
      easing: "easeOutExpo"
    })
    .add({
      targets: ".body",
      translateX: [-100, 0],
      opacity: [0, 1],
      duration: 800,
      easing: "easeOutExpo"
    })
    .add({
      targets: ".arms, .legs",
      scale: [0, 1],
      rotate: [0, 360],
      opacity: [0, 1],
      duration: 1000,
      delay: anime.stagger(100),
      easing: 'easeInOutBack'
    });
}
