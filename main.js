/* ====================================
   BOREDTECH MAIN.JS
   Tech for the Curious
==================================== */

/* -------------------------------
   THEME SYSTEM
-------------------------------- */

const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("boredtech-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    updateThemeIcon();
}

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const currentTheme =
            document.body.classList.contains("dark")
                ? "dark"
                : "light";

        localStorage.setItem(
            "boredtech-theme",
            currentTheme
        );

        updateThemeIcon();

    });

}

function updateThemeIcon() {

    if (!themeToggle) return;

    if (document.body.classList.contains("dark")) {

        themeToggle.innerHTML = "☀️";

    } else {

        themeToggle.innerHTML = "🌙";

    }

}

/* -------------------------------
   SMOOTH SCROLL BUTTONS
-------------------------------- */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", e => {

        e.preventDefault();

        const target =
            document.querySelector(
                link.getAttribute("href")
            );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

/* -------------------------------
   ARTICLE CARD HOVER EFFECTS
-------------------------------- */

const articleCards =
    document.querySelectorAll(".article-card");

articleCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0px)";

    });

});

/* -------------------------------
   NEWSLETTER
-------------------------------- */

const newsletterInput =
    document.querySelector(
        ".newsletter-form input"
    );

const newsletterButton =
    document.querySelector(
        ".newsletter-form button"
    );

if (newsletterButton) {

    newsletterButton.addEventListener(
        "click",
        () => {

            const email =
                newsletterInput.value.trim();

            if (!email) {

                alert(
                    "Please enter your email."
                );

                return;

            }

            if (
                !email.includes("@") ||
                !email.includes(".")
            ) {

                alert(
                    "Please enter a valid email."
                );

                return;

            }

            alert(
                "Thanks for subscribing to BoredTech!"
            );

            newsletterInput.value = "";

        }
    );

}

/* -------------------------------
   READING PROGRESS BAR
-------------------------------- */

const progressBar =
    document.createElement("div");

progressBar.id = "progress-bar";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    progressBar.style.width =
        progress + "%";

});

/* -------------------------------
   FEATURED ARTICLE ANIMATION
-------------------------------- */

const featured =
    document.querySelector(".featured");

if (featured) {

    const observer =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

                }

            });

        });

    observer.observe(featured);

}

/* -------------------------------
   SEARCH SYSTEM PREPARATION
-------------------------------- */

const searchButton =
    document.querySelector(".search-btn");

if (searchButton) {

    searchButton.addEventListener(
        "click",
        () => {

            alert(
                "Search coming soon in BoredTech v2."
            );

        }
    );

}

/* -------------------------------
   CONSOLE MESSAGE
-------------------------------- */

console.log(`
=================================
 BOREDTECH
 Tech for the Curious
=================================
`);
