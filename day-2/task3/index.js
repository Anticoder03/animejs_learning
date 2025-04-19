//! 🔴 Advanced Practice (8–10): Event-Based & Multiple Effects
//* Trigger an Animation on Click: Set autoplay: false, and trigger the animation of a box (move + rotate + scale) when a user clicks a button.

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {
//     anime({
//         targets:".box",
//         diration:1000,
//         translateX: 250,
//         rotate:360,
//         scale:[1,1.5]
//     })
// });


//* Combine Translate + Rotate + Scale on Scroll: Use Anime.js with IntersectionObserver to animate .section elements — they should slide up, scale in, and fade in on scroll.

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
//         duration: 1000,
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






//* Sequential Button Effects Using Timelines: Use a timeline to animate a button on click:

//* Scale down

//* Rotate slightly

//* Return to normal

//* Emit a glowing pulse (optional)


const button = document.querySelector('.anime-btn');

button.addEventListener('click', () => {
  const tl = anime.timeline({
    targets: button,
    easing: 'easeOutQuad',
    duration: 150
  });

  // Step 1: Scale down
  tl.add({ scale: 0.9 })

  // Step 2: Rotate slightly
  .add({ rotate: '5deg' })

  // Step 3: Return to normal
  .add({
    scale: 1,
    rotate: '0deg',
    duration: 200
  })

  // Step 4: Emit a glowing pulse (optional)
  .add({
    boxShadow: [
      '0 0 0 rgba(255, 255, 255, 0.5)',
      '0 0 20px rgba(255, 255, 255, 0.8)',
      '0 0 0 rgba(255, 255, 255, 0)'
    ],
    duration: 500
  });
});

