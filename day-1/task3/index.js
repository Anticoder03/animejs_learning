//! 🔵 Level 3: Combine Styles & Multiple Effects

//* Morphing Button

//TODO Animate a button that:

//TODO Increases width to 200px

//TODO Changes border radius to make it pill-shaped

//TODO Changes background color


anime({
    targets:".btn",
    width:200,
    borderRadius:"50px",
    backgroundColor:"rgb(255,0,0)",
})


//* Box Party

//TODO Create 5 boxes in a row. Animate them:

//TODO Move one after the other (use delays)

//TODO Rotate and change color while moving


// anime({
//     targets:".box1",
//     delay:100,
//     translateY:100,
//     rotate:360,
//     backgroundColor:"rgb(255,0,0)",
//     loop:true,
//     direction:"alternate",
// })
// anime({
//     targets:".box2",
//     delay:200,
//     translateY:100,
//     rotate:360,
//     backgroundColor:"rgb(0,255,0)",
//     loop:true,
//     direction:"alternate",
// })
// anime({
//     targets:".box3",
//     delay:300,
//     translateY:100,
//     rotate:360,
//     loop:true,
//     direction:"alternate",
//     backgroundColor:"rgb(0,0,255)",
// })
// anime({
//     targets:".box4",
//     delay:400,
//     translateY:100,
//     rotate:360,
//     backgroundColor:"rgb(0,0,0)",
//     loop:true,
//     direction:"alternate",
// })
// anime({
//     targets:".box5",
//     delay:500,
//     translateY:100,
//     rotate:360,
//     backgroundColor:"rgb(255,255,0)",
//     loop:true,
//     direction:"alternate",
// })

// anime({
//     targets:".box",
//     translateY:100,
//     rotate:360,
//     backgroundColor:["rgb(255,0,0)","rgb(0,255,0)"],
//     loop:true,
//     direction:"alternate",
//     delay:anime.stagger(100),
// })

//* Scaling Grid

//TODO Create a 3x3 grid of squares and animate them:

//TODO Each one scales up and down with a staggered delay

//? Use loop: true and direction: 'alternate'

anime({
    targets:".box",
    scale:1.5,
    loop:true,
    direction:"alternate",
    delay:anime.stagger(100),
})

