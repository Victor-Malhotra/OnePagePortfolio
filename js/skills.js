gsap.from(".bar abbr", {
    scrollTrigger: "#skills_section",
    left: 0,
    ease: Power2.easeInOut,
    duration: 3,
    stagger: 0.1
});

gsap.from(".bar span", {
    scrollTrigger: ".bar",
    width: "0px",
    ease: Power2.easeInOut,
    duration: 3,
    stagger: 0.1
})