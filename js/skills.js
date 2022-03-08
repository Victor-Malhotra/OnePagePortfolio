gsap.from(".bar abbr", {
    scrollTrigger: ".carousel",
    left: 0,
    ease: Power2.easeInOut,
    duration: 3,
    stagger: 0.1
});

gsap.from(".bar span", {
    scrollTrigger: ".carousel",
    width: "0px",
    ease: Power2.easeInOut,
    duration: 3,
    stagger: 0.1
})