// Add blur effect to hero section on scroll
document.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero");
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        hero.style.filter = "blur(5px)";
    } else {
        hero.style.filter = "none";
    }
});
