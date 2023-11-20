var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


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


document.addEventListener("DOMContentLoaded", function() {
    const parallax_el = document.querySelectorAll(".parallax3D");
    
    let xValue = 0;
    let yValue = 0;
    
    window.addEventListener("mousemove", (e) => {
        xValue = e.clientX - window.innerWidth / 2;
        yValue = e.clientY - window.innerHeight / 2;
    
        parallax_el.forEach((el) => {
            el.style.transform = `translateX(calc(-50% + ${-xValue * 0.01}px)) translateY(calc(-50% + ${-yValue * 0.01}px))`;
        })
    })
    });

document.addEventListener("DOMContentLoaded", function() {
    const parallax_el = document.querySelectorAll(".parallaxBackground");
    
    let xValue = 0;
    let yValue = 0;
    
    window.addEventListener("mousemove", (e) => {
        xValue = e.clientX - window.innerWidth / 2;
        yValue = e.clientY - window.innerHeight / 2;
    
        parallax_el.forEach((el) => {
            el.style.transform = `translateX(calc(${-xValue * 0.2}px)) translateY(calc(10% + ${-yValue * 0.1}px))`;
        })
    })
    });
    

document.addEventListener("DOMContentLoaded", function() {
    const parallax_el = document.querySelectorAll(".parallaxBlobs");
    
    let xValue = 0;
    let yValue = 0;
    
    window.addEventListener("mousemove", (e) => {
        xValue = e.clientX - window.innerWidth / 2;
        yValue = e.clientY - window.innerHeight / 2;
    
        parallax_el.forEach((el) => {
            el.style.transform = `translateX(calc(-50% + ${-xValue * 0.1}px)) translateY(calc(10% + ${-yValue * 0.1}px)) scale(1.4)`;
        })
    })
    });

document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("navbar");
    var homeSection = document.getElementById("home");

    var sections = document.querySelectorAll('#home, #about, #services, #websites, #games, #programs, #contact');
    var navbarLinks = document.querySelectorAll('.navbar-link');

    var options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Adjust this value based on your layout
    };

    function highlightNav(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                var index = Array.from(sections).indexOf(entry.target);
                for (var link of navbarLinks) {
                    link.classList.remove("active-link");
                }
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


    var sidemenu = document.getElementById("sidemenu");

    function openmenu() {
        console.log("Opening menu");
        console.log("Current right value:", sidemenu.style.right);
        sidemenu.style.right = "0";
    }
    
    function closemenu() {
        console.log("Closing menu");
        sidemenu.style.right = "-200px";
    }



    const scriptURL = 'https://script.google.com/macros/s/AKfycbwpUYTj9hV9O4kHlMU4RpDc5IS9OnF2KNdxO1IxJ_1n2nH0mfW9fa2o6S6nzxUwAxvp/exec'
    const form = document.forms['submit-to-google-sheet']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    })