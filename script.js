// Tab functionality
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Logo rotation
document.addEventListener('DOMContentLoaded', function () {
    rotateLogos();
});

function rotateLogos() {
    const logos = document.querySelectorAll('.animate-logo2, .animate-logo3, .animate-logo4, .animate-logo5, .animate-logo6');
    logos.forEach((logo) => {
        rotateLogo(logo);
    });
}

function rotateLogo(logo) {
    const duration = Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000;
    const angle = Math.random() * 360;
    const direction = Math.random() < 0.5 ? -1 : 1;

    logo.style.transition = 'none';
    logo.style.transformOrigin = 'center center';
    logo.style.transform = 'rotate(0deg)';

    logo.style.transition = `transform ${duration}ms ease-in-out`;
    logo.style.transform = `rotate(${direction * angle}deg)`;

    setTimeout(() => {
        logo.style.transition = 'none';
        logo.style.transformOrigin = 'initial';
        logo.style.transform = 'none';
        rotateLogo(logo);
    }, duration);
}

// Parallax effects
document.addEventListener("DOMContentLoaded", function () {
    const applyParallaxEffect = (el, xFactor, yFactor, scale) => {
        let xValue = 0;
        let yValue = 0;

        window.addEventListener("mousemove", (e) => {
            xValue = e.clientX - window.innerWidth / 2;
            yValue = e.clientY - window.innerHeight / 2;

            el.style.transform = `translateX(calc(${xFactor * xValue}px)) translateY(calc(${yFactor * yValue}px)) scale(${scale})`;
        });
    };

    applyParallaxEffect(document.querySelectorAll(".parallaxLogo"), -0.01, -0.01, 1);
    applyParallaxEffect(document.querySelectorAll(".parallaxBackground"), -0.5, -0.5, 1.3);
    applyParallaxEffect(document.querySelectorAll(".parallaxBlobs"), -0.1, -0.2, 0.8);
});

// Navigation and scroll
document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("navbar");
    var homeSection = document.getElementById("home");

    var sections = document.querySelectorAll('#home, #about, #services, #websites, #games, #programs, #contact');
    var navbarLinks = document.querySelectorAll('.navbar-link');

    var options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    function highlightNav(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                var index = Array.from(sections).indexOf(entry.target);
                navbarLinks.forEach(link => link.classList.remove("active-link"));
                navbarLinks[index].classList.add("active-link");
            }
        });
    }

    var observer = new IntersectionObserver(highlightNav, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;
        var triggerPosition = homeSection.offsetHeight;

        if (scrollPosition > triggerPosition) {
            navbar.classList.add("navbar-scroll");
        } else {
            navbar.classList.remove("navbar-scroll");
        }
    });
});

// Side menu
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    console.log("Opening menu");
    console.log("Current right value:", sidemenu.style.right);
    sidemenu.style.right = "0";
}

function closemenu() {
    console.log("Closing menu");
    sidemenu.style.right = "-200px";
};

// Parallax scrolling effect
document.addEventListener("DOMContentLoaded", function () {
    const parallaxLeft = document.querySelector(".parallax-left");
    const parallaxRight = document.querySelector(".parallax-right");
    const parallaxLogo = document.querySelector(".home-logo");
    const aboutSection = document.getElementById("my-work");

    const scrollLimit = aboutSection.offsetTop + aboutSection.offsetHeight;

    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;

        if (scrollPosition >= aboutSection.offsetTop) {
            const limitedTranslation = Math.min(scrollPosition - aboutSection.offsetTop, scrollLimit - aboutSection.offsetTop);
            parallaxLeft.style.transform = `translateX(-${limitedTranslation}px) translateY(${limitedTranslation * 1.1}px)`;
            parallaxRight.style.transform = `translateX(${limitedTranslation}px) translateY(${limitedTranslation * 1.1}px)`;
            parallaxLogo.style.transform = `translateX(0) translateY(-${limitedTranslation * 0.3}px)`;
        }
    });
});

// GSAP Animation
gsap.registerPlugin(ScrollTrigger, EasePack);

let tl;
let scrollSection = document.getElementById("my-work")

function setupGSAPAnimation() {
    tl = gsap.timeline();
    tl.to(scrollSection, { x: -scrollSection.offsetWidth * 2.47, ease: "power1.inOut" });

    ScrollTrigger.create({
        animation: tl,
        trigger: scrollSection,
        start: "center center",
        end: "+=6600",
        scrub: 1,
        pin: true
    });
}

function destroyGSAPAnimation() {
    if (tl) {
        tl.kill();
        tl = null;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth > 1450) {
        setupGSAPAnimation();
    }

    window.addEventListener("resize", function () {
        if (window.innerWidth > 1450) {
            setupGSAPAnimation();
        } else {
            destroyGSAPAnimation();
        }
    });
});

// Floating circles
const numberOfCircles = 8;
const circles = [];
const cursorRadius = 25; // Adjust this value for the effective radius of the cursor

function getRandomPosition() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    return { x, y };
}

function createCircle() {
    const circle = document.createElement('div');
    circle.className = 'floating-circle';
    document.getElementById('circle-container').appendChild(circle);

    const { x, y } = getRandomPosition();
    circle.style.transform = `translate(${x}px, ${y}px)`;

    const vx = (Math.random() * 2 - 1) * 3;
    const vy = (Math.random() * 2 - 1) * 3;

    circles.push({
        element: circle,
        x,
        y,
        radius: 75,
        vx,
        vy,
    });

    // Add hover effect
    circle.addEventListener('mouseenter', () => {
        circle.style.transition = 'transform 0.5s ease-out';
        circle.style.transform = `scale(1.5)`;
    });

    circle.addEventListener('mouseleave', () => {
        circle.style.transition = 'transform 0.5s ease-out';
        circle.style.transform = `scale(1)`;
    });
}

function updateCircles(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    circles.forEach((circle, index) => {
        circle.x += circle.vx;
        circle.y += circle.vy;

        if (circle.x - circle.radius < 0 || circle.x + circle.radius > window.innerWidth) {
            circle.vx *= -1;
        }

        if (circle.y - circle.radius < 0 || circle.y + circle.radius > window.innerHeight) {
            circle.vy *= -1;
        }

        const distanceToCursor = Math.sqrt((circle.x - mouseX) ** 2 + (circle.y - mouseY) ** 2);
        if (distanceToCursor < circle.radius + cursorRadius) {
            // Bounce off the cursor
            const angle = Math.atan2(circle.y - mouseY, circle.x - mouseX);
            circle.vx = Math.cos(angle) * 3; // Adjust the speed as needed
            circle.vy = Math.sin(angle) * 3; // Adjust the speed as needed
        }

        for (let i = 0; i < circles.length; i++) {
            if (i !== index && checkCollision(circle, circles[i])) {
                handleCollision(circle, circles[i]);
            }
        }

        circle.element.style.transform = `translate(${circle.x}px, ${circle.y}px)`;
    });
}

function checkCollision(circle1, circle2) {
    const dx = circle1.x - circle2.x;
    const dy = circle1.y - circle2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < circle1.radius + circle2.radius;
}

function handleCollision(circle1, circle2) {
    const tempVx = circle1.vx;
    const tempVy = circle1.vy;
    circle1.vx = circle2.vx;
    circle1.vy = circle2.vy;
    circle2.vx = tempVx;
    circle2.vy = tempVy;
}

document.addEventListener('mousemove', updateCircles);

for (let i = 0; i < numberOfCircles; i++) {
    createCircle();
}

setInterval(() => {
    requestAnimationFrame(() => updateCircles({ clientX: 0, clientY: 0 }));
}, 1000 / 60);