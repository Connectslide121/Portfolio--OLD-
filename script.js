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

    // Set transform-origin and transform
    logo.style.transition = 'none'; // Reset transition
    logo.style.transformOrigin = 'center center';
    logo.style.transform = 'rotate(0deg)'; // Reset rotation


    // Apply the new styles with transition
    logo.style.transition = `transform ${duration}ms ease-in-out`;
    logo.style.transform = `rotate(${direction * angle}deg)`;

    // Reset the transition and rotation after the animation duration
    setTimeout(() => {
        logo.style.transition = 'none';
        logo.style.transformOrigin = 'initial'; // Reset transform origin
        logo.style.transform = 'none'; // Reset transform
        rotateLogo(logo);
    }, duration);
}