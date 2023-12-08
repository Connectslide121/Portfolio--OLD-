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


// Logo rotation

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

// Parallax scrolling effect
document.addEventListener("DOMContentLoaded", function parallaxScrollEffect () {
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
    tl.to(scrollSection, {
        x: -7300 + window.innerWidth,
        ease: 'power1.inOut',
        scrollTrigger: { 
          trigger: scrollSection,
          start: "bottom bottom",
          end: "bottom bottom-=8200",
          scrub: 1,
          pin: true

        }
      });
}

function destroyGSAPAnimation() {
    if (tl) {
        tl.kill();
        tl = null;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth > 1400) {
        setupGSAPAnimation();
    }

    window.addEventListener("resize", function () {
        if (window.innerWidth > 1400) {
            setupGSAPAnimation();
        } else {
            destroyGSAPAnimation();
        }
    });
});

var websitesProgressBar = document.getElementById("websitesProgressBar");
var triggerWebsitesProgressBar = document.getElementsByClassName("websitesDates");

gsap.to(websitesProgressBar, {
    width: 1340,
    ease: 'none',
    scrollTrigger: { 
      trigger: triggerWebsitesProgressBar[0],
      start: "bottom center",
      end: "right center-=1500px",
      scrub: 0.3 
    }
  });

  var gamesProgressBar = document.getElementById("gamesProgressBar");
  var triggerGamesProgressBar = document.getElementsByClassName("gamesDates");
  
  gsap.to(gamesProgressBar, {
      width: 2012,
      ease: 'none',
      scrollTrigger: { 
        trigger: triggerGamesProgressBar[0],
        start: "bottom center-=2900px",
        end: "bottom center-=4600px",
        scrub: 0.3 
      }
    });
  
    var scrollProgramsProgressBar = document.getElementById("programsProgressBar");
    var triggerProgramsProgressBar = document.getElementsByClassName("programsDates");
    
    gsap.to(scrollProgramsProgressBar, {
        width: 1340,
        ease: 'none',
        scrollTrigger: { 
          trigger: triggerProgramsProgressBar[0],
          start: "bottom center-=5600px",
          end: "bottom center-=7000px",
          scrub: 0.3 
        }
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

    const vx = Math.random() * 10;
    const vy = Math.random() * 10;

    circles.push({
        element: circle,
        x,
        y,
        radius: 75,
        vx,
        vy,
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

for (let i = 0; i < numberOfCircles; i++) {
    createCircle();
}

setInterval(() => {
    requestAnimationFrame(() => updateCircles({ clientX: 0, clientY: 0 }));
}, 1000 / 60);


rotateLogos()

    
      
document.addEventListener('mousemove', updateCircles);


