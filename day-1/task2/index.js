//! 🟡 Level 2: Add Timing & Looping
//* Bounce Up and Down

//TODO Animate a box moving vertically (translateY) with easeInOutBounce, looping forever.

// anime({
//     targets:".box",
//     translateY:100,
//     easing:"easeInOutBounce",
//     loop:true,
//     duration:1000
// })


//TODO Delayed Start

//* Animate 3 boxes:

//? Box 1 starts immediately

// anime({
//     targets:".box1",
//     rotate:360,
// })

//? Box 2 after 500ms
// anime({
//     targets:".box2",
//     delay:500,
//     rotate:360,
// })

//? Box 3 after 1000ms

// anime({
//     targets:".box3",
//     delay:1000,
//     rotate:360,
// })

//* Reverse Direction

//TODO Animate an element to move right and then reverse using direction: 'alternate'.

anime({
    targets:".elem",
    translateX:500,
    direction:"alternate",
    loop:true
})