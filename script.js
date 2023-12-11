// Tab functionality
var tablinks = document.querySelectorAll(".tab-links");
var tabcontents = document.querySelectorAll(".tab-contents");

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
var sidemenu = document.querySelector("#sidemenu");

function openmenu() {
    console.log("Opening menu");
    console.log("Current right value:", sidemenu.style.right);
    sidemenu.style.right = "0";
}

function closemenu() {
    console.log("Closing menu");
    sidemenu.style.right = "-200px";
};



gsap.registerPlugin(ScrollTrigger, EasePack, ScrollToPlugin);

//Logo rotation

const logos = document.querySelectorAll('.animate-logo2, .animate-logo3, .animate-logo4, .animate-logo5, .animate-logo6');

logos.forEach((logo) => {
    rotateLogo(logo);
})

function rotateLogo(logo){
    const angle = Math.random() * 360;
    const direction = Math.random() < 0.5 ? -1 : 1;

    gsap.to(logo, {
        rotation : angle * direction,
        duration: Math.random() * 8,
        ease:Linear.easeNone,
        onComplete: () => rotateLogo(logo)  
    })
}




// Home scroll animation

const mainLogo = document.querySelector(".home-logo")
// const innerRing = document.querySelectorAll(".animate-logo2, .animate-logo3")
// const outerRing = document.querySelectorAll(".animate-logo4, .animate-logo5, .animate-logo6")
const rings = document.querySelectorAll(".animate-logo2, .animate-logo3, .animate-logo4, .animate-logo5, .animate-logo6")
const homeScrollSection = document.querySelector("#home")
const textRight = document.querySelector(".text-right")
const textLeft = document.querySelector(".text-left")


gsap.to(textRight, {
    x: 1500,
    scrollTrigger:{
        trigger: homeScrollSection,
        start: "top top",
        scrub: 0,
    } 
})

gsap.to(textLeft, {
    x: -1500,
    scrollTrigger:{
        trigger: homeScrollSection,
        start: "top top",
        end: "bottom top",
        scrub: 0,
        ease: "none"
    } 
})

gsap.to(mainLogo, {
    y: 1200,
    scrollTrigger:{
        trigger: homeScrollSection,
        start: "top top",
        scrub: 0,
    } 
})

rings.forEach(ring => {
    gsap.to(ring, {
        scale: 8,
        scrollTrigger:{
            trigger: homeScrollSection,
            start: "top top",
            end: "bottom top",
            scrub: 0,
        } 
    })
})

// gsap.to(outerRing, {
//     scale: 1.2,
//     scrollTrigger:{
//         trigger: homeScrollSection,
//         start: "top top",
//         end: "bottom top",
//         scrub: 0,
//     } 
// })


// Horizontal scroll animation
const horizontalScrollSection = document.querySelector("#my-work")
const scrollInnerSections = document.querySelectorAll("#websites, #games, #programs")
const scrollLimit = scrollInnerSections[0].offsetWidth + scrollInnerSections[1].offsetWidth + scrollInnerSections[2].offsetWidth


gsap.to(horizontalScrollSection, {
    x: -scrollLimit + window.innerWidth,
    ease: 'power1.inOut',
    scrollTrigger: { 
        trigger: horizontalScrollSection,
        start: "bottom bottom",
        end: "bottom bottom-=8300",
        scrub: 1,
        pin: true
    }
});


// Websites progress bar animation
var websitesTitle = document.querySelector("#websitesTitle")
var websitesProgressBar = document.querySelector("#websitesProgressBar");
var triggerWebsitesProgressBar = document.querySelectorAll(".websitesDates");

gsap.to(websitesProgressBar, {
    width: 1340,
    ease: 'none',
    scrollTrigger: { 
      trigger: triggerWebsitesProgressBar[0],
      start: "bottom center",
      end: "right center-=1800px",
      scrub: 1 
    }
  });

gsap.to(websitesTitle, {
    x: 1540,
    ease: 'none',
    scrollTrigger: { 
      trigger: triggerWebsitesProgressBar[0],
      start: "bottom center",
      end: "right center-=1800px",
      scrub: 1
    }
  })


// Games progress bar animation
var gamesTitle = document.querySelector("#gamesTitle")
var gamesProgressBar = document.querySelector("#gamesProgressBar");
var triggerGamesProgressBar = document.querySelectorAll(".gamesDates");

gsap.to(gamesProgressBar, {
    width: 2012,
    ease: 'none',
    scrollTrigger: { 
    trigger: triggerGamesProgressBar[0],
    start: "bottom center-=2900px",
    end: "bottom center-=4600px",
    scrub: 1 
    }
});

gsap.to(gamesTitle, {
    x: 2250,
    ease: 'none',
    scrollTrigger: { 
        trigger: triggerGamesProgressBar[0],
        start: "bottom center-=2900px",
        end: "bottom center-=4600px",
        scrub: 1
    }
});


// Programs progress bar animation
var programsTitle = document.querySelector("#programsTitle")
var scrollProgramsProgressBar = document.querySelector("#programsProgressBar");
var triggerProgramsProgressBar = document.querySelectorAll(".programsDates");

gsap.to(scrollProgramsProgressBar, {
    width: 1340,
    ease: 'none',
    scrollTrigger: { 
        trigger: triggerProgramsProgressBar[0],
        start: "bottom center-=5600px",
        end: "bottom center-=7000px",
        scrub: 1
    }
    });

gsap.to(programsTitle, {
    x: 1510,
    ease: 'none',
    scrollTrigger: { 
        trigger: triggerProgramsProgressBar[0],
        start: "bottom center-=5600px",
        end: "bottom center-=7000px",
        scrub: 1
    }
});

    
// Links fix
const contactNavLinks = document.querySelectorAll(".contactNavLink");
const myWorkNavLink = document.querySelector("#myWorkNavLink")
const sections = document.querySelectorAll("#home, #about, #services, #my-work, #contact")
const scrollToMyWork = sections[0].offsetHeight + sections[1].offsetHeight + sections[2].offsetHeight + sections[3].offsetHeight - window.innerHeight
const scrollToContact = sections[0].offsetHeight + sections[1].offsetHeight + sections[2].offsetHeight + sections[3].offsetHeight +sections[4].offsetHeight  - window.innerHeight

Array.from(contactNavLinks).forEach(element => {
    element.addEventListener('mousedown', (e) => {
        e.preventDefault();
    
        gsap.to(window, {
            scrollTo: {
                y: scrollToContact,
                ease: "none"
            },
        });
    });
});

myWorkNavLink.addEventListener('mousedown', (e) => {
    e.preventDefault();

    gsap.to(window, {
        scrollTo: {
            y: scrollToMyWork,
            ease: "none"
        },
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
    document.querySelector("#circle-container").appendChild(circle);

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

    
      
document.addEventListener('mousemove', updateCircles);


