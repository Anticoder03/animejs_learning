//! 🚀 Advanced
//? Character Entry Animation
//? Animate a character in parts:
//* Use a timeline with nested animations

// const tl = anime.timeline({
//     easing: 'easeInOutExpo',
//     duration: 750,
// })

//* Head fades in from top

// tl.add({
//     targets:".head",
//     translateY: [-100, 0],
//     opacity:[0, 1]
// })

//* Then body slides in from the left

// .add({
//     targets:".body",
//     translateX: [-100, 0],
//     opacity:[0, 1]
// })

//* Then arms pop in with scale and rotation

// .add({
//     targets:".arms",
//     scale: [0, 1],
//     rotate: [0, 360],
//     easing: 'easeInOutBack',
//     opacity:[0, 1]
// })



//? Scroll-triggered Timeline
//?Combine IntersectionObserver with a timeline:

//* When .section comes into view, animate its child elements in sequence (translate, fade, scale)

// const sections = document.querySelectorAll('.section');

// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       anime({
//         targets: entry.target,
//         translateY: [100, 0],
//         scale: [0.8, 1],
//         rotate: [-10, 0],
//         opacity: [0, 1],
//         duration: 3000,
//         easing: "easeOutExpo"
//       });

//       observer.unobserve(entry.target); // Optional: animate only once
//     }
//   });
// }, {
//   threshold: 0.2
// });

// sections.forEach(section => {
//   observer.observe(section);
// });

//? Complex Loader
//? Create a fancy loader:

//* Line rotates, then a circle scales up, then text fades in
//* Loop the animation for a loading screen


// const tl = anime.timeline({
    
//     easing: 'linear',
//      loop: true,
// })

// tl.add({
//     targets:".line-loader",
//     rotate: [0, 360],
//     easing: 'linear',
//     borderRadius:"50%",
//     height: 0,
//     width: 0,
// })
// .add({
//     targets:".line-loader",
//     height:200,
//     width:200,
//     backgroundColor:"rgb(58, 58, 58)",
//     boxShadow:" 0px 0px 250px rgb(221, 221, 221)",
// })
// .add({
//     targets:".loading-text",
//     opacity:[0, 1],
//     duration:500,
//     duration:1000
// })
//? Interactive Card Flip
//? On hover or click:

//* Card scales down slightly

//* Rotates on Y-axis (flip)

//* Scales back up

//* Text on back fades in


// const card = document.querySelector('.card');
// anime({
//     targets:".back-text",
//     opacity:0,
// })
// card.addEventListener('click', () => {
// anime(
//     {
//         targets: card,
//         scale: [1, 0.9, 1],
//         rotateY: [0, 180],
//         duration: 1000,
//         easing: 'easeInOutBack',
//         complete: function() {
//             anime({
//                 targets: '.front',
//                 opacity: [1, 0],
//                 duration: 500,
//                 easing: 'easeInOutExpo'
//             });
//             anime({
//                 targets: '.back-text',
//                 opacity: [0, 1],
//                 duration: 500,
//                 easing: 'easeInOutExpo',
//                 visibility: 'visible'
//             });
//         }
//     }
// )
// })