//! 🟢 Basic Practice (1–3): Playing with Properties
//* Move a Box Horizontally: Animate a box (.box) to move from left to right using translateX, and return to the original position using direction: 'alternate'.

anime({
    targets:".box",
    translateX:100,
    direction:"alternate",
    
})


//* Fade In + Scale Up an Image: Make an image (.hero-img) scale from 0.8 to 1.0 and fade in using opacity on page load.

anime({
    targets:".hero-img",
    scale:[0.8,1],
    opacity:[0,1],
    autoplay:true,
    duration:1000,

})

//* Spin a Circle: Rotate a circle (.circle) 360deg using rotate with easing set to "easeInOutQuad" and a duration of 2s.

anime({
    targets:".circle",
    rotate:360,
    duration:2000,
    easing:"easeInOutQuad",
})