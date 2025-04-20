//! 🌱 Basic
//? Sequential Movement
//? Use anime.timeline() for sequencing.

// const tl = anime.timeline({
//     targets:".box",
//     loop:true,
//     direction:"alternate",
// });

//* Animate a box to:
//* Move right (translateX)

// tl
//     .add({
//         delay:2000,
//         translateX:100,
//         duration: 1000,

//     })

//* Then rotate (rotate)

    // .add({
    //     rotate:360
    // })

//* Then scale up (scale)

    // .add({
    //     scale:1.5
    // })



//? Bounce Ball
//? Create a bouncing ball animation using timeline: - Repeat the sequence
// const tl = anime.timeline({
//     targets:".ball",
//     duration:1000,
//     delay:1000,
//     loop:true,
// })
//* Drop the ball down - Squash it slightly

// tl
    // .add({
    //     translateY:200,
    //     height:150
    // })  

//* Make it bounce back up

    // .add({
    //     translateY:0,
    //     height:200
    // })



//? Loading Dots
//* Make 3 dots (.dot) bounce one after another using anime.stagger() inside a timeline.

const tl = anime.timeline({
    targets:".dot",
    loop:true,
    easing:"easeInOutSine",
    duration:500,
});

tl
    .add({
        translateY:-40,
        delay:anime.stagger(200), 
    })
    .add({
        translateY:0,
        delay:anime.stagger(200),
    })
    .add({
        translateY:-40,
        delay:anime.stagger(200),
    })