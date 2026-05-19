// ============================
// AOS INITIALIZE
// ============================

AOS.init({
    duration: 1000,
    once: true
});


// ============================
// GSAP HERO ANIMATION
// ============================

gsap.from(".logo",{
    y:-50,
    opacity:0,
    duration:1
});

gsap.from(".nav-link",{
    y:-40,
    opacity:0,
    duration:1,
    stagger:0.15
});

gsap.from(".hero-title",{
    x:-100,
    opacity:0,
    duration:1.2
});

gsap.from(".hero-text",{
    x:-80,
    opacity:0,
    duration:1.3,
    delay:0.2
});

gsap.from(".hero-buttons",{
    y:50,
    opacity:0,
    duration:1.4,
    delay:0.4
});

gsap.from(".hero-card",{
    x:100,
    opacity:0,
    duration:1.5
});


// ============================
// COUNTER ANIMATION
// ============================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

    counter.innerText="0";

    const updateCounter=()=>{

        const target=+counter.getAttribute("data-target");

        const current=+counter.innerText;

        const increment=target/100;

        if(current < target){

            counter.innerText=
            `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter,20);

        }else{

            counter.innerText=target;
        }
    };

    updateCounter();

});


// ============================
// NAVBAR SCROLL EFFECT
// ============================

window.addEventListener("scroll",()=>{

    const navbar =
    document.querySelector(".custom-nav");

    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(10,15,30,0.98)";

        navbar.style.boxShadow =
        "0 0 25px rgba(0,229,255,0.35)";

    }

    else{

        navbar.style.background =
        "rgba(15,23,42,0.92)";

        navbar.style.boxShadow =
        "0 0 18px rgba(0,229,255,0.15)";
    }

});


// ============================
// BUTTON GLOW EFFECT
// ============================

const buttons =
document.querySelectorAll(".btn-neon");

buttons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

gsap.to(button,{
scale:1.08,
duration:0.25
});

});

button.addEventListener("mouseleave",()=>{

gsap.to(button,{
scale:1,
duration:0.25
});

});

});


// ============================
// FEATURE CARD HOVER ANIMATION
// ============================

const cards =
document.querySelectorAll(".feature-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

gsap.to(card,{
y:-12,
duration:0.3
});

});

card.addEventListener("mouseleave",()=>{

gsap.to(card,{
y:0,
duration:0.3
});

});

});


// ============================
// SMOOTH SCROLL
// ============================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

anchor.addEventListener("click",
function(e){

e.preventDefault();

document.querySelector(
this.getAttribute("href")
).scrollIntoView({

behavior:"smooth"

});

});

});