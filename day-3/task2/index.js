//! 🧩 Intermediate
//! Button Glow Effect

//? On button click:

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {
//     const tl = anime.timeline({
//         targets: '.btn',
//         easing: 'easeInOutExpo',
//         duration: 750,
//         autoplay: true,
//     });
    
//* Scale down the button

// tl
//     .add({
//     scale: 0.8,
//     easing: 'easeInOutQuad',
//     })

//* Rotate it slightly

    // .add({
    //     rotate:-5
    // })

//* Scale back to normal

    // .add({
    //     scale: 1,
    //     easing: 'easeInOutQuad',
    // })

//* Add a glowing pulse using box-shadow (optional)

//     .add({
//         boxShadow: [
//             '0 0 0 rgba(255, 255, 255, 0.5)',
//             '0 0 20px rgba(255, 255, 255, 0.8)',
//             '0 0 0 rgba(255, 255, 255, 0)'
//         ],
//         duration: 500
//     })
// })


//? Animated Navbar Items
//* On page load, animate .nav-item elements: - Use anime.timeline() + stagger()

// window.addEventListener('load', () => {
// const tl = anime.timeline({
//     targets: '.item',
//     easing: 'easeInOutExpo',
//     duration: 750,
//     autoplay: true,
// });

//* Slide in from top

// tl.add({
//     targets: '.item',
//     translateY: [50, 0],
//     delay: anime.stagger(100)
//   })

//* Fade in with a staggered delay

// .add({
//     targets: '.item',
//     opacity: [0, 1],
//     delay: anime.stagger(100)
//   });

// });


//? Form Elements Entry
//* Animate each form field (input, textarea, button) one by one as the page loads:

document.addEventListener('DOMContentLoaded', () => {
    
    const tl = anime.timeline({
        targets: 'input, textarea, button',
        easing: 'easeInOutExpo',
        duration: 750,
        autoplay: true,
    });
 
//* Slide in from the left - Fade in
//* Add delay using stagger()

tl 
  .add({
    translateX: [-100, 0],
    opacity: [0, 1],
    delay: anime.stagger(100) 
  })

  

});