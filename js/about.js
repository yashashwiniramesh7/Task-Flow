// ==========================
// PAGE LOAD ANIMATION
// ==========================

window.addEventListener(
"load",

()=>{

const cards =

document.querySelectorAll(

".overview-card, .info-card, .tech-card, .team-card"

);

cards.forEach(

(card,index)=>{

card.style.opacity="0";

card.style.transform=

"translateY(40px)";

setTimeout(()=>{

card.style.transition=

"all 0.8s ease";

card.style.opacity="1";

card.style.transform=

"translateY(0)";

},index*180);

});

});


// ==========================
// HOVER GLOW EFFECT
// ==========================

const allCards =

document.querySelectorAll(

".info-card, .tech-card, .team-card"

);

allCards.forEach(card=>{

card.addEventListener(

"mouseenter",

()=>{

card.style.boxShadow=

"0 0 35px rgba(0,229,255,0.35)";

});

card.addEventListener(

"mouseleave",

()=>{

card.style.boxShadow=

"";

});

});


// ==========================
// TEAM IMAGE ROTATION
// ==========================

const teamImages =

document.querySelectorAll(

".team-card img"

);

teamImages.forEach(img=>{

img.addEventListener(

"mouseenter",

()=>{

img.style.transform=

"rotate(8deg) scale(1.08)";

img.style.transition=

"0.35s";

});

img.addEventListener(

"mouseleave",

()=>{

img.style.transform=

"rotate(0deg) scale(1)";

});

});