// anime({
//     targets: 'path',
//     strokeDashoffset: [anime.setDashoffset, 0],
//     easing: 'easeInOutSine',
//     duration: 3000,
//     direction: 'alternate',
//     loop: true
//   });
//   const motionPath = anime.path('#curve');
  
//   anime({
//     targets: 'circle',
//     direction: 'alternate',
//     translateX: motionPath('x'),
//     translateY: motionPath('y'),
//     rotate: motionPath('angle'),
//     duration: 3000,
//     loop: true,
//     easing: 'easeInOutQuad'
//   });

// anime({
//     targets: '.dot',
//     translateY: () => anime.random(-300, 300),
//     translateX: () => anime.random(-300, 300),
//     duration: 1000,
//     direction: 'alternate',
//     loop: true
//   });


// 3d cube animation
//   // Scene
//   const scene = new THREE.Scene();

//   // Camera
//   const camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
//   );
//   camera.position.z = 5;

//   // Renderer
//   const renderer = new THREE.WebGLRenderer({ antialias: true });
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   document.body.appendChild(renderer.domElement);

//   // Main Cube
//   const geometry = new THREE.BoxGeometry();
//   const material = new THREE.MeshBasicMaterial({ color: "#1C74A0" });
//   const cube = new THREE.Mesh(geometry, material);
//   scene.add(cube);

//   // Border Cube
//   const borderGeometry = new THREE.BoxGeometry(1.05, 1.05, 1.05);
//   const borderMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
//   const borderCube = new THREE.Mesh(borderGeometry, borderMaterial);
//   scene.add(borderCube);

//   // OrbitControls
//   const controls = new THREE.OrbitControls(camera, renderer.domElement);
//   controls.enableDamping = true;
//   controls.dampingFactor = 0.05;
//   controls.enableZoom = true;

//   // Anime.js animation for cube rotation
// anime({
//     targets: [cube.rotation, borderCube.rotation], // both cubes
//     y: Math.PI * 2,
//     x: Math.PI * 2,
//     duration: 5000,
//     easing: "linear",
//     loop: true
//   });
  
//   // Anime.js animation for cube scaling (pulsing effect)
//   anime({
//     targets: [cube.scale, borderCube.scale], // both cubes
//     x: [1, 1.2, 1],
//     y: [1, 1.2, 1],
//     z: [1, 1.2, 1],
//     duration: 2000,
//     easing: "easeInOutSine",
//     loop: true
//   });
  
//   // Anime.js animation for cube rotation and pulsing
//   anime({
//     targets: cube.rotation,
//     y: Math.PI * 2,
//     x: Math.PI * 2,
//     duration: 5000,
//     easing: "linear",
//     loop: true
//   });

//   anime({
//     targets: cube.scale,
//     x: [1, 1.2, 1],
//     y: [1, 1.2, 1],
//     z: [1, 1.2, 1],
//     duration: 2000,
//     easing: "easeInOutSine",
//     loop: true
//   });

//   // Handle window resize
//   window.addEventListener('resize', () => {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//   });

//   // Animate
//   function animateScene() {
//     requestAnimationFrame(animateScene);
//     controls.update();
//     renderer.render(scene, camera);
//   }

//   animateScene();

// learning model

anime({
    targets: '.bar',
    height: (el, i) => 50 + i * 30,
    delay: anime.stagger(200),
    duration: 800,
    easing: 'easeOutBounce'
  });
  