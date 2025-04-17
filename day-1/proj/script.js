anime({
    targets: ".logo_contaner",
    translateX: [-100, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: "easeInOutQuad",
    delay: 300
  });
  
  anime({
    targets: ".item",
    translateY: [-100, 0],
    opacity: [0, 1],
    duration: 1000,
    delay: anime.stagger(150, { start: 800 }), // smoother entry after logo
    easing: "easeInOutQuad"
  });
  
anime({
    targets:".title",
    scale:[0.8,1],
    duration:1000,
    opacity:[0,1],
    easing:"easeInOutQuad",

})
anime({
    targets:".text_container p",
    opacity:[0,1],
    translateY:[100,0],
    duration:1000,
    delay:anime.stagger(100),
    easing:"easeInOutQuad",
})
anime({
    targets:".btn",
    scale:[0.8,1],
    duration:1000,
})
anime({
    targets:"footer",
    translateX:[-100,0],
    opacity:[0,1],
    duration:1000,
    easing:"easeInOutQuad",
})