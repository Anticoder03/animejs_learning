const tl = anime.timeline({});
tl.add({
    targets:".item",
    opacity: [0,1],
    translateY: [-150,0],
    duration: 1000,
    delay: anime.stagger(100),
    easing: "linear",
})
.add({
    targets:".tagline",
    translateX:[-100,0],
    opacity:[0,1],
    // duration: 1000,
    // delay:anime.stagger(500)
})
.add({
    targets:".cta",
    translateY:[50,0],
    opacity:[0,1],
    // duration:500,
    easing:"linear"
})
.add({
    targets:".feature_heading",
    translateX:[-100,0],
    opacity:[0,1],

})
.add({
    targets:".card",
    scale:[0,1],
    duration:1000,
    delay: anime.stagger(100),
});


const tl2 = anime.timeline({
    autoplay:false
});
const products = document.querySelector(".products");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            anime({
                targets:entry.target,
                translateX:[-100,0],
                opacity:[0,1],
                duration:1000,
                easing:"linear",
            });
            observer.unobserve(entry.target);
        }
    });
},{
    threshold: 0.2
});

observer.observe(products); 

// logic for testimonial section apear when it is nteraction with a sliding anmation
const testimonial = document.querySelector(".testimonial");
const testimonialObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            anime({
                targets:entry.target,
                translateX:[-100,0],
                opacity:[0,1],
                duration:1000,
                easing:"linear",
            });
            testimonialObserver.unobserve(entry.target);
        }
    });
},{
    threshold: 0.2
});
testimonialObserver.observe(testimonial);

// footer animation useing gsap scrolltrigger
// gsap.registerPlugin(ScrollTrigger);
gsap.from("footer",{
    scrollTrigger:{
        trigger:"footer",
        start:"top 100%",
        end:"top 99%",
        scrub:1,
        // markers:true,
    },
    translateY:100,
    opacity:0,
    duration:1,
});
