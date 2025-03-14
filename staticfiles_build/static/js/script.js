// Dark and Light Mode Toggle
const darkmodebtn = document.querySelectorAll(".dark-light-mode");
const lightmode = document.querySelectorAll(".lightmodes");
const darkmode = document.querySelectorAll(".darkmodes");

darkmodebtn.forEach((data) => {
    data.addEventListener("click", () => {
        document.body.classList.toggle("darkmode");
        if (document.body.className === "darkmode") {
            darkmode.forEach((dm) => {
                dm.style.display = "none";
            });
            lightmode.forEach((lm) => {
                lm.style.display = "block";
            });
        } else {
            darkmode.forEach((dm) => {
                dm.style.display = "block";
            });
            lightmode.forEach((lm) => {
                lm.style.display = "none";
            });
        }
    });
});

// Responsive Navbar
const navbar = document.querySelector(".nav");
const closenavbar = document.querySelector(".close-navbar");
const narbarstart = document.querySelector(".hamburger");

narbarstart.addEventListener("click", () => {
    navbar.style.right = "18px";
});
closenavbar.addEventListener("click", () => {
    navbar.style.right = "-100%";
});

// Resume Pop-up
const closepdf = document.querySelector(".closepfd");
const openpdfbox = document.querySelector("#myresumeopen");
const pdfbox = document.querySelector(".myresumebox");

openpdfbox.addEventListener("click", () => {
    pdfbox.style.display = "flex";
    document.body.style.position = 'fixed';
    document.body.style.top = '0';
    document.body.style.left = '0';
    document.body.style.width = '100%';
    document.body.style.height = '100%';
    document.body.style.overflow = 'hidden';
});
closepdf.addEventListener("click", () => {
    pdfbox.style.display = "none";
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.width = '';
    document.body.style.height = '';
    document.body.style.overflow = '';
});

// Project Overlay
const viewbutton = document.querySelectorAll(".view-icon");
const overbox = document.querySelectorAll(".overlay-2");

viewbutton.forEach((btn, index) => {
    btn.addEventListener("mouseenter", (e) => {
        overbox.forEach((box, index2) => {
            if (index === index2) {
                box.style.transition = "top 0.3s ease"; // Optional: for smooth animation
                box.style.top = "0px"; // Slide in from the top
            }
        });
    });
});

overbox.forEach((overbox) => {
    overbox.addEventListener("mouseleave", () => {
        overbox.style.transition = "top 0.3s ease"; // Optional: for smooth animation
        overbox.style.top = "100%"; // Slide out to hide
    });
});

// Ensure DOM Content is Loaded
document.addEventListener('DOMContentLoaded', function () {
    const resumeOpenButton = document.getElementById('myresumeopen');
    const resumeCloseButton = document.getElementById('closepfd');
    const resumeBox = document.getElementById('myresumebox');

    if (resumeOpenButton && resumeCloseButton && resumeBox) {
        resumeOpenButton.addEventListener('click', function () {
            resumeBox.style.display = 'flex';
        });

        resumeCloseButton.addEventListener('click', function () {
            resumeBox.style.display = 'none';
        });
    }

    // Let's Talk Button
    const letsTalkButton = document.getElementById('letstalk');
    const contactSection = document.getElementById('contactsection');

    if (letsTalkButton && contactSection) {
        letsTalkButton.addEventListener('click', function () {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});