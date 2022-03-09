gsap.from(".bar abbr", {
    scrollTrigger: {
        trigger: "#type_skills",
        toggleAction: "restart reset play reset",
    },
    left: 0,
    ease: Power2.easeInOut,
    duration: 3,
    stagger: 0.1
});

gsap.from(".bar span", {
    scrollTrigger: {
        trigger: "#type_skills",
        toggleAction: "restart restart play reset",
    },
    width: "0px",
    ease: Power2.easeInOut,
    duration: 3,
    stagger: 0.1
})