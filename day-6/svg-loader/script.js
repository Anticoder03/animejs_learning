
anime({
    targets: '#morph',
    d: [
      { value: 'M50,10 a40,40 0 1,0 0.01,0' }, // Circle
      { value: 'M20,20 Q50,80 80,20 T20,20' }, // Wave
      { value: 'M10,50 Q50,10 90,50 Q50,90 10,50 Z' } // Diamond-like
    ],
    duration: 3000,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutQuad'
  });
  