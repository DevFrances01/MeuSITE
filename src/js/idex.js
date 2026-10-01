
// =========================
// MENU
// =========================

const menuButton = document.querySelector(".menu-btn");
const menu = document.querySelector(".nav");

if (menuButton && menu) {

    menuButton.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    document.querySelectorAll(".nav a").forEach((link) => {

        link.addEventListener("click", () => {
            menu.classList.remove("active");
        });

    });
}


// =========================
// ANIMAÇÃO DAS SEÇÕES
// =========================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {
    observer.observe(section);
});

