//! 🔴 Advanced Level
//? 🔥 Animate an SVG logo using multiple path tags, and stagger the stroke animations.

//? 🔥 Create an animated line graph using SVG + Anime.js + dynamic values.

//? 🔥 Combine Anime.js with GSAP to animate UI and canvas simultaneously (e.g. GSAP scroll + Anime.js card entry).


 anime({
    targets: 'path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2000,
    delay: anime.stagger(200), 
    loop: true,
    direction: 'alternate',
  });

  const lineData = [50, 100, 150, 200, 180, 120, 100, 80, 110, 150];
  const linePath = document.querySelector('#linePath');
  
  const linePoints = lineData.map((val, idx) => `${(idx * 40) + 20},${300 - val}`).join(' ');
  linePath.setAttribute('d', `M ${linePoints}`);

  anime({
    targets: linePath,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeOutQuad',
    duration: 3000,
    loop: true,
    direction: 'alternate',
  });

  function animateCard() {
    gsap.to('.card', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'bounce.out',
      stagger: 0.2,
    });

    anime({
      targets: '.card',
      scale: [0.5, 1],
      duration: 1000,
      easing: 'easeInOutElastic',
      loop: false,
    });
  }