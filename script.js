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
    const parallax_el = document.querySelectorAll(".parallax3D", "home-snippet");
    
    let xValue = 0;
    let yValue = 0;
    
    window.addEventListener("mousemove", (e) => {
        xValue = e.clientX - window.innerWidth / 2;
        yValue = e.clientY - window.innerHeight / 2;
    
        parallax_el.forEach((el) => {
            el.style.transform = `translateX(calc(-50% + ${-xValue * 0.02}px)) translateY(calc(-50% + ${-yValue * 0.02}px))`;
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
                el.style.transform = `translateX(calc(${-xValue * 0.3}px)) translateY(calc(10% + ${-yValue * 0.3}px)) scale(1.4)`;
            })
        })
        });
    
