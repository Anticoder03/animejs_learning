// Initialize particles.js
particlesJS('particles-js', {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#ff6b6b'
    },
    shape: {
      type: 'circle'
    },
    opacity: {
      value: 0.3,
      random: true
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ff6b6b',
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab'
      },
      resize: true
    }
  },
  retina_detect: true
});

// SVG Animations
const heartAnimation = anime({
  targets: '.heart',
  scale: [1, 1.2, 1],
  rotate: [0, 15, 0],
  duration: 3000,
  loop: true,
  easing: 'easeInOutQuad',
  direction: 'alternate'
});

const wingsAnimation = anime({
  targets: ['.wing.left', '.wing.right'],
  translateX: function(target) {
    return target.classList.contains('left') ? [-20, 20] : [20, -20];
  },
  rotate: function(target) {
    return target.classList.contains('left') ? [-15, 15] : [15, -15];
  },
  duration: 4000,
  loop: true,
  easing: 'easeInOutSine',
  direction: 'alternate'
});

const featherAnimation = anime({
  targets: '.feather',
  translateY: [-20, 20],
  rotate: [-15, 15],
  duration: 2500,
  loop: true,
  easing: 'easeInOutSine',
  direction: 'alternate'
});

// Initial animations
const tl = anime.timeline({});
tl
  .add({
    targets: ".center",
    opacity: [0, 1],
    duration: 1500,
    scale: [0, 1],
    easing: 'easeOutElastic(1, .5)'
  })
  .add({
    targets: '.tagline',
    opacity: [0, 1],
    translateY: [-50, 0],
    duration: 1200,
    easing: 'easeOutExpo',
    delay: anime.stagger(100)
  });

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Background image zoom effect
const backgroundImages = document.querySelectorAll('.background-image');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  backgroundImages.forEach(backgroundImage => {
    const section = backgroundImage.closest('section');
    const rect = section.getBoundingClientRect();
    
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const scale = 1 + scrollProgress * 0.5; // Max zoom of 1.5x
      backgroundImage.style.transform = `scale(${scale})`;
      backgroundImage.style.opacity = Math.min(0.3, scrollProgress * 0.3);
    } else {
      // Reset when out of view
      backgroundImage.style.transform = 'scale(1)';
      backgroundImage.style.opacity = '0';
    }
  });
  
  lastScrollY = window.scrollY;
});

// Intersection Observer for text animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Animate text elements
      const textElements = entry.target.querySelectorAll('h1');
      textElements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('visible');
        }, index * 200);
      });

      // Animate background with smooth transition
      const sectionId = entry.target.id;
      const colors = {
        first: { bg: '#1a0f2e', bird: '#ff6b6b' },
        second: { bg: '#2d1b4e', bird: '#ff9f9f' },
        third: { bg: '#4a1942', bird: '#ffb3b3' },
        fourth: { bg: '#6b2c70', bird: '#ffc7c7' },
        fifth: { bg: '#8e3a8e', bird: '#ffdada' }
      };

      if (colors[sectionId]) {
        // Smooth background transition
        document.body.style.transition = 'background-color 1.5s ease-in-out';
        document.body.style.backgroundColor = colors[sectionId].bg;
        
        // Smooth bird color transition
        const bird = document.querySelector('.bird');
        bird.style.transition = 'color 1.5s ease-in-out';
        bird.style.color = colors[sectionId].bird;

        // Animate SVG elements based on section
        const svgElements = document.querySelectorAll('.floating-hearts, .floating-wings, .floating-feathers');
        svgElements.forEach((el, index) => {
          anime({
            targets: el,
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
            duration: 2000,
            delay: index * 200,
            easing: 'easeInOutSine'
          });
        });
      }
    } else {
      // Reset text elements when out of view
      const textElements = entry.target.querySelectorAll('h1');
      textElements.forEach(el => el.classList.remove('visible'));
    }
  });
}, {
  threshold: 0.3,
  rootMargin: '0px'
});

// Observe all sections
document.querySelectorAll('section').forEach(section => observer.observe(section));

// Enhanced bird animation
const bird = document.querySelector('.bird');
let birdPosition = 0;

function animateBird() {
  birdPosition += 0.5;
  const yOffset = Math.sin(birdPosition * 0.05) * 50;
  bird.style.transform = `translateX(${birdPosition}px) translateY(${yOffset}px) rotate(${Math.sin(birdPosition * 0.05) * 15}deg)`;
  
  if (birdPosition > window.innerWidth) {
    birdPosition = -100;
  }
  
  requestAnimationFrame(animateBird);
}

animateBird();
