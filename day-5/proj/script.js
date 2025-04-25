// Scroll-triggered Animation using IntersectionObserver
const productCards = document.querySelectorAll('.product-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5
});

productCards.forEach(card => observer.observe(card));

// Hover Effect with Anime.js
const productCard = document.querySelectorAll('.product-card');

productCard.forEach(card => {
  const title = card.querySelector('.title');
  const image = card.querySelector('img');
  const button = card.querySelector('button');

  // Timeline for hover effect
  const hoverTimeline = anime.timeline({
    targets: card,
    autoplay: false,
    easing: 'easeInOutQuad',
    duration: 500
  });

  hoverTimeline.add({
    targets: title,
    opacity: 1,
    translateX: [0, -30],
    duration: 500,
    easing: 'easeInOutQuad',
  });

  hoverTimeline.add({
    targets: image,
    translateX: [0, -30],
    opacity: [1, 0],
    duration: 500,
    easing: 'easeInOutQuad',
  }, 0);

  card.addEventListener('mouseenter', () => hoverTimeline.play());
  card.addEventListener('mouseleave', () => hoverTimeline.reverse());
});

// Cart Icon Animation on Button Click
const cartButton = document.querySelectorAll('.product-card button');
const cartIcon = document.getElementById('cartIcon');

cartButton.forEach(button => {
  button.addEventListener('click', () => {
    anime({
      targets: cartIcon,
      translateX: 0,
      opacity: 1,
      duration: 800,
      easing: 'easeOutExpo'
    });
  });
});
