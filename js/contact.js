// ===========================
// ELEMENTS
// ===========================

const contactForm =
document.getElementById(
"contactForm"
);

const themeToggle =
document.getElementById(
"themeToggle"
);

const emailToggle =
document.getElementById(
"emailToggle"
);

const alertToggle =
document.getElementById(
"alertToggle"
);

const saveBtn =
document.getElementById(
"saveSettings"
);


// ===========================
// LOAD SAVED SETTINGS
// ===========================

const settings =

JSON.parse(
localStorage.getItem(
"userSettings"
)
) || {};


// Theme

if(settings.theme==="light"){

document.body.classList.add(
"light-mode"
);

themeToggle.checked=false;

}
else{

themeToggle.checked=true;

}


// Email

emailToggle.checked =
settings.email || false;


// Alerts

alertToggle.checked =
settings.alerts || false;


// ===========================
// THEME TOGGLE
// ===========================

themeToggle.addEventListener(
"change",

()=>{

document.body.classList.toggle(
"light-mode"
);

});


// ===========================
// SAVE SETTINGS
// ===========================

saveBtn.addEventListener(
"click",

()=>{

const userSettings = {

theme:

themeToggle.checked ?

"dark"

:

"light",

email:

emailToggle.checked,

alerts:

alertToggle.checked

};

localStorage.setItem(

"userSettings",

JSON.stringify(
userSettings
)

);

alert(
"Preferences Saved!"
);

});


// ===========================
// CONTACT FORM
// ===========================

contactForm.addEventListener(
"submit",

(e)=>{

e.preventDefault();

alert(
"Message Sent Successfully!"
);

contactForm.reset();

});