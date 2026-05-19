// ===========================
// ELEMENTS
// ===========================

const monthYear =
document.getElementById(
"monthYear"
);

const calendarDays =
document.getElementById(
"calendarDays"
);

const prevBtn =
document.getElementById(
"prevBtn"
);

const nextBtn =
document.getElementById(
"nextBtn"
);

const upcomingTasks =
document.getElementById(
"upcomingTasks"
);


// ===========================
// LOAD TASKS
// ===========================

const tasks =
JSON.parse(
localStorage.getItem("tasks")
) || [];


// ===========================
// CURRENT DATE
// ===========================

let currentDate =
new Date();


// ===========================
// RENDER CALENDAR
// ===========================

function renderCalendar(){

calendarDays.innerHTML="";

const year =
currentDate.getFullYear();

const month =
currentDate.getMonth();

const firstDay =
new Date(
year,
month,
1
).getDay();

const lastDate =
new Date(
year,
month+1,
0
).getDate();

monthYear.innerText =

currentDate.toLocaleString(
"default",
{
month:"long",
year:"numeric"
}
);


// Empty slots

for(
let i=0;
i<firstDay;
i++
){

calendarDays.innerHTML +=
`<div></div>`;

}


// Create days

for(
let day=1;
day<=lastDate;
day++
){

const dayBox =
document.createElement("div");

dayBox.classList.add("day");

const fullDate =

`${year}-${
String(month+1)
.padStart(2,"0")
}-${
String(day)
.padStart(2,"0")
}`;


// Today

const today =
new Date();

if(

day===today.getDate() &&

month===today.getMonth() &&

year===today.getFullYear()

){

dayBox.classList.add(
"today"
);

}


// Task date highlight

const hasTask =
tasks.some(
task=>task.date===fullDate
);

if(hasTask){

dayBox.classList.add(
"task-day"
);

}

dayBox.innerHTML=
`${day}`;

calendarDays.appendChild(
dayBox
);

}

renderUpcoming();

}


// ===========================
// UPCOMING TASKS
// ===========================

function renderUpcoming(){

upcomingTasks.innerHTML="";

const sortedTasks =

tasks

.filter(
task=>task.date!=="No Date"
)

.sort(

(a,b)=>

new Date(a.date)

-

new Date(b.date)

);

if(
sortedTasks.length===0
){

upcomingTasks.innerHTML=

"<p>No upcoming deadlines.</p>";

return;

}

sortedTasks.forEach(task=>{

upcomingTasks.innerHTML +=

`

<div class="task-item">

<strong>

${task.name}

</strong>

Priority:
${task.priority}

<br>

Due:
${task.date}

</div>

`;

});

}


// ===========================
// BUTTONS
// ===========================

prevBtn.addEventListener(
"click",

()=>{

currentDate.setMonth(

currentDate.getMonth()-1

);

renderCalendar();

});

nextBtn.addEventListener(
"click",

()=>{

currentDate.setMonth(

currentDate.getMonth()+1

);

renderCalendar();

});


// ===========================
// INITIAL LOAD
// ===========================

renderCalendar();