//! 🟡 Intermediate Practice (4–7): Timing, Loop, Easing
//* Bounce Effect on Box: Create a bounce effect by combining scaleY and translateY with easing: "easeOutBounce" and a short duration. Try to loop it 3 times.

// anime({
//     targets:".circle",
//     translateY:200,
//     easing:"easeOutBounce",
//     loop:3,
//     duration:1000
// })

//* Hover Effect on Button: On hover, make a button:

//* scale to 1.1

//* change backgroundColor

//* fade in shadow (using box-shadow via class toggle or using Anime.js with CSS variables)

// const btn = document.querySelector('.anime-button');

// btn.addEventListener('mouseenter', () => {
//   anime({
//     targets: btn,
//     scale: 1.1,
//     backgroundColor: '#1D4ED8', // darker blue
//     update: anim => {
//       btn.style.setProperty('--shadowOpacity', anim.progress / 100 * 0.3); // fade in shadow
//     },
//     duration: 300,
//     easing: 'easeOutQuad'
//   });
// });

// btn.addEventListener('mouseleave', () => {
//   anime({
//     targets: btn,
//     scale: 1,
//     backgroundColor: '#3490dc',
//     update: anim => {
//       btn.style.setProperty('--shadowOpacity', (100 - anim.progress) / 100 * 0.3);
//     },
//     duration: 300,
//     easing: 'easeOutQuad'
//   });
// });


//* Delayed Stagger Animation: Animate a group of items (.list-item) to appear with increasing delay using anime.stagger() and translateY.

// anime({
//     targets:".item",
//     translateY:100,
//     duration:2000,
//     delay:anime.stagger(500),
//     opacity:[0,1]
// })

//* Looping Color Fade Animation: Animate a div to change its background color from red to blue and back in an infinite loop.

// anime({
//     targets:".box",
//     backgroundColor:["#000","#fff"],
//     duration:2000,
//     loop:true,  
// })
