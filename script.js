document.addEventListener("DOMContentLoaded", function () {
    gsap.from("nav", { duration: 1, y: -100, opacity: 0, ease: "bounce" });
    gsap.from("h1", { duration: 1.5, x: -200, opacity: 0, delay: 0.5 });
    gsap.from("section", { opacity: 0, duration: 1, stagger: 0.3, ease: "power2.out" });
});