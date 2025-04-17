//! 🟢 Level 1: Basic Animation Challenges
//* Slide In + Fade In


//TODO Create a box that slides in from the left (translateX) and fades in (opacity) at the same time.

// anime({
//     targets: '.box',
//     translateX: 250,
//     duration: 1500,
// })



//* Pulse Effect

//TODO Animate a circle that grows (scale: 1.5) and shrinks repeatedly (loop: true) to simulate a pulse.

// anime({
//     targets:".box",
//     scale:1.5,
//     loop:true,
//     duration: 500,
// })


//* Rotate & Change Color

//TODO Make a square rotate 360° and change background color from red to green.

anime({
    targets:".box",
    backgroundColor:["rgb(255,0,0)","rgb(0,255,0)"],
    rotate:360,
    duration:4000,
    easing:"linear",
    
})