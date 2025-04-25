//! 🟢 Basic Level
//? 🔹 Animate the stroke of an SVG path to make it look like it’s being drawn.

//? 🔹 Create an SVG circle and animate its r (radius) attribute using Anime.js.

//? 🔹 Use anime.setDashoffset to control the drawing of an SVG path.

//? 🔹 Animate a bar chart using Anime.js by gradually increasing the height of .bar elements.

//  //* Animate SVG Path Drawing
//  anime({
//     targets: 'path',
//     strokeDashoffset: [anime.setDashoffset, 0],
//     duration: 3000,
//     easing: 'easeInOutSine',
//     direction: 'alternate',
//     loop: true
//   });

//   //* Animate Circle Radius
//   anime({
//     targets: 'circle',
//     r: [10, 40],
//     direction: 'alternate',
//     easing: 'easeInOutSine',
//     duration: 2000,
//     loop: true
//   });

//   //* Animate Bar Chart
//   anime({
//     targets: '.bar',
//     height: [0, 80],
//     y: [100, 20], 
//     delay: anime.stagger(200),
//     easing: 'easeOutElastic(1, .8)',
//     duration: 1500
//   });

