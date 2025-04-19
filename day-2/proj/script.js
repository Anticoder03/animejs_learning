anime({
    targets:".logo-text",
    duration: 2000,
    translateY:[-20, 0],
    opacity:[0,1]
})
const tl = anime.timeline({
    duration: 2000,
    easing: 'easeOutExpo'
})
tl.add({
    targets: '.item',
    translateY: [-20, 0],
    opacity: [0, 1],
    delay: anime.stagger(100)
})
anime({
    targets: ".hero .left h1, .hero .left h2",
    translateY: [-30, 0],
    opacity: [0, 1],
    delay: anime.stagger(200),
    duration: 1500,
    easing: "easeOutExpo"
});

anime({
    targets: ".right img",
    scale: [0.8, 1],
    opacity: [0, 1],
    delay: 800,
    duration: 1500,
    easing: "easeOutExpo"
});


//? ----------- About Section Logic -------------
document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector('.about');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Trigger anime.js animation
                anime({
                    targets: '.about img',
                    opacity: [0, 1],
                    scale: [0.8, 1],
                    easing: 'easeOutExpo',
                    duration: 1000
                });

                anime({
                    targets: '.about h1, .about p',
                    opacity: [0, 1],
                    translateY: [40, 0],
                    easing: 'easeOutExpo',
                    duration: 1000,
                    delay: anime.stagger(200)
                });

                // Remove the hidden class to reveal it
                aboutSection.classList.remove('hidden');

                // Only trigger once
                observer.unobserve(aboutSection);
            }
        });
    }, {
        threshold: 0.2
    });

    observer.observe(aboutSection);
});


//? ----------- Projects Logic -------------
document.addEventListener("DOMContentLoaded", () => {
    const projectSection = document.querySelector('.projects');
    const projectCards = document.querySelectorAll('.project-card');
    const projectBtns = document.querySelectorAll('.project-btn');
  
    // Scroll Observer
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            targets: projectCards,
            opacity: [0, 1],
            translateY: [40, 0],
            easing: 'easeOutExpo',
            duration: 1000,
            delay: anime.stagger(200)
          });
  
          projectSection.classList.remove('hidden');
          obs.unobserve(projectSection);
        }
      });
    }, {
      threshold: 0.3
    });
  
    observer.observe(projectSection);
  
    // Click bounce effect for buttons
    projectBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        anime({
          targets: btn,
          scale: [1, 1.2, 1],
          duration: 300,
          easing: 'easeInOutQuad'
        });
      });
    });
  });
  

//? ----------- skills logic  -------------

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('hidden');
      anime({
        targets: entry.target.querySelectorAll('.skill-icon'),
        scale: [0, 1],
        opacity: [0, 1],
        delay: anime.stagger(100),
        duration: 1000,
        easing: 'easeOutElastic(1, .6)'
      });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skills').forEach(section => {
  observer.observe(section);
});

//? ----------- Contact Logic -------------

const contactObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const inputs = entry.target.querySelectorAll('.form-input, .form-textarea, .send-button');
      anime({
        targets: inputs,
        opacity: [0, 1],
        translateY: [30, 0],
        delay: anime.stagger(100),
        duration: 800,
        easing: 'easeOutQuad'
      });
      entry.target.classList.remove('hidden');
      contactObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.contact').forEach(section => {
  contactObserver.observe(section);
});

//? ----------- Footer section -------------

  const footerObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        anime({
          targets: '.social-icons a',
          opacity: [0, 1],
          scale: [0.5, 1],
          translateY: [20, 0],
          easing: 'easeOutBack',
          duration: 1000,
          delay: anime.stagger(200),
        });
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, { threshold: 0.3 });

  const footer = document.querySelector('.footer');
  if (footer) {
    footerObserver.observe(footer);
  }
