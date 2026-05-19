// ===============================
// LOAD TASKS FROM LOCAL STORAGE
// ===============================

const tasks =
JSON.parse(
localStorage.getItem("tasks")
) || [];


// ===============================
// CALCULATIONS
// ===============================

const total =
tasks.length;

const completed =
tasks.filter(
task => task.completed
).length;

const pending =
total - completed;

const success =

total === 0

? 0

: Math.round(
(completed / total) * 100
);


// ===============================
// UPDATE STATISTICS
// ===============================

document.getElementById(
"totalTasks"
).innerText = total;

document.getElementById(
"completedTasks"
).innerText = completed;

document.getElementById(
"pendingTasks"
).innerText = pending;

document.getElementById(
"successRate"
).innerText = success + "%";


// ===============================
// PRIORITY COUNTS
// ===============================

const highCount =
tasks.filter(
task => task.priority==="High"
).length;

const mediumCount =
tasks.filter(
task => task.priority==="Medium"
).length;

const lowCount =
tasks.filter(
task => task.priority==="Low"
).length;


// ===============================
// COMPLETION CHART
// ===============================

const completionCtx =
document
.getElementById("completionChart");

new Chart(
completionCtx,
{

type:"doughnut",

data:{

labels:[
"Completed",
"Pending"
],

datasets:[{

data:[
completed,
pending
],

backgroundColor:[

"#00E5FF",
"#7B2FF7"

],

borderWidth:2

}]

},

options:{

responsive:true,

plugins:{

legend:{

labels:{

color:"white"

}

}

}

}

});


// ===============================
// PRIORITY CHART
// ===============================

const priorityCtx =
document
.getElementById("priorityChart");

new Chart(
priorityCtx,
{

type:"bar",

data:{

labels:[

"High",
"Medium",
"Low"

],

datasets:[{

label:"Priority Tasks",

data:[

highCount,
mediumCount,
lowCount

],

backgroundColor:[

"#ff1744",
"#ffb300",
"#00ff99"

]

}]

},

options:{

responsive:true,

scales:{

x:{

ticks:{
color:"white"
},

grid:{
color:"#333"
}

},

y:{

ticks:{
color:"white"
},

grid:{
color:"#333"
}

}

},

plugins:{

legend:{

labels:{

color:"white"

}

}

}

}

});