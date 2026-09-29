/* ===============================
MOBILE MENU
================================ */

const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

if (menuIcon && navbar) {
    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("active");

        const icon = menuIcon.querySelector("i");

        if (navbar.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    });
}

/* ===============================
CLOSE MENU AFTER CLICK
================================ */

const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");

        const icon = menuIcon.querySelector("i");

        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    });
});

/* ===============================
TYPING EFFECT
================================ */

const typingElement = document.querySelector(".typing-text span");

const words = [
    "Computer Engineering Student",
    "Web Developer",
    "Mobile Developer",
    "Machine Learning Enthusiast",
    "Computer Vision Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        typingSpeed = 1800;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }

        typingSpeed = 500;
    }

    setTimeout(typeEffect, typingSpeed);
}

typeEffect();

/* ===============================
ACTIVE NAVIGATION
================================ */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY + 200;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {
            navLinks.forEach((link) => {
                link.classList.remove("active");
            });

            const activeLink = document.querySelector(
                '#navbar a[href="#' + sectionId + '"]'
            );

            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
});

/* ===============================
CONTACT FORM
================================ */

const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !subject || !message) {
            alert("Silakan lengkapi semua kolom.");
            return;
        }

        const whatsappNumber = "6285175296475";
        const whatsappMessage =
            `Halo Alan,%0A%0A` +
            `Nama: ${name}%0A` +
            `Email: ${email}%0A` +
            `Subject: ${subject}%0A%0A` +
            `${message}`;

        /*
           Ganti 628XXXXXXXXXX dengan nomor WhatsApp
           kamu sebelum website dipublikasikan.
        */

        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

        window.open(whatsappURL, "_blank");
    });
}
