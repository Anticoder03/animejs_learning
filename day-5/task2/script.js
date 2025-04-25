//! 🟡 Intermediate Level
//? 🔸 Create a path using SVG and make a circle follow it using anime.path().

//? 🔸 Animate an element's rotate using values calculated from its path angle.

//? 🔸 Create random bouncing balls using dynamic functions with anime.random().

//? 🔸 Use Anime.js to animate a progress bar that increases when a button is clicked.

 // Circle follows path with rotation
 const pathMotion = anime.path('#followPath');

 anime({
   targets: 'circle',
   translateX: pathMotion('x'),
   translateY: pathMotion('y'),
   rotate: pathMotion('angle'),
   duration: 4000,
   loop: true,
   easing: 'easeInOutSine',
   direction: 'alternate'
 });

 // Random Bouncing Balls
 const container = document.getElementById('ball-container');
 for (let i = 0; i < 10; i++) {
   const ball = document.createElement('div');
   ball.classList.add('ball');
   container.appendChild(ball);

   anime({
     targets: ball,
     translateX: () => anime.random(0, 280),
     translateY: [
       { value: anime.random(80, 130), duration: 1000, easing: 'easeOutQuad' },
       { value: 0, duration: 1000, easing: 'easeInQuad' }
     ],
     loop: true,
     delay: anime.random(0, 1000)
   });
 }

 // Click-to-Increase Progress Bar
 let progress = 0;
 function increaseProgress() {
   if (progress >= 100) return;
   progress += 10;
   anime({
     targets: '#bar',
     width: progress + '%',
     easing: 'easeOutQuad',
     duration: 500
   });
 }