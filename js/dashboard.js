// ELEMENTS

const taskInput = document.getElementById("taskInput");
const priority = document.getElementById("priority");
const dueDate = document.getElementById("dueDate");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const progressBar = document.getElementById("progressBar");
const searchInput = document.getElementById("searchInput");
const filterPriority = document.getElementById("filterPriority");


// LOAD STORAGE

let tasks =
JSON.parse(
localStorage.getItem("tasks")
) || [];

renderTasks();


// ADD TASK

addTaskBtn.addEventListener("click", () => {

if(taskInput.value.trim()===""){

alert("Enter a task");
return;

}

const task = {

id: Date.now(),

name: taskInput.value,

priority: priority.value,

date: dueDate.value || "No Date",

completed:false

};

tasks.push(task);

saveTasks();

renderTasks();


// CLEAR INPUTS

taskInput.value="";
dueDate.value="";
priority.value="High";


// CLOSE MODAL SAFELY

const modalElement =
document.getElementById(
"taskModal"
);

const modal =
bootstrap.Modal.getInstance(
modalElement
);

if(modal){

modal.hide();

}

});


// RENDER TASKS

function renderTasks(){

taskList.innerHTML="";

let filteredTasks =

tasks.filter(task=>{

const searchMatch =

task.name
.toLowerCase()
.includes(
searchInput.value
.toLowerCase()
);

const priorityMatch =

filterPriority.value==="all"

||

task.priority===

filterPriority.value;

return searchMatch &&
priorityMatch;

});


filteredTasks.forEach(task=>{

const col =
document.createElement("div");

col.className="col-md-6";

col.innerHTML=`

<div class="task-card
${task.completed ? "completed":""}">

<h4>${task.name}</h4>

<p class="${task.priority.toLowerCase()}">

${task.priority} Priority

</p>

<p class="task-date">

Due: ${task.date}

</p>

<div class="mt-3">

<button
class="action-btn done-btn"
onclick="toggleTask(${task.id})">

Done

</button>

<button
class="action-btn edit-btn"
onclick="editTask(${task.id})">

Edit

</button>

<button
class="action-btn delete-btn"
onclick="deleteTask(${task.id})">

Delete

</button>

</div>

</div>

`;

taskList.appendChild(col);

});

updateProgress();

}


// SAVE

function saveTasks(){

localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);

}


// DELETE

function deleteTask(id){

tasks = tasks.filter(
task=>task.id!==id
);

saveTasks();

renderTasks();

}


// COMPLETE

function toggleTask(id){

tasks = tasks.map(task=>{

if(task.id===id){

task.completed=
!task.completed;

}

return task;

});

saveTasks();

renderTasks();

}


// EDIT

function editTask(id){

const task = tasks.find(
task=>task.id===id
);

const newName = prompt(
"Edit Task:",
task.name
);

if(newName){

task.name=newName;

saveTasks();

renderTasks();

}

}


// SEARCH

searchInput.addEventListener(
"input",
renderTasks
);


// FILTER

filterPriority.addEventListener(
"change",
renderTasks
);


// PROGRESS

function updateProgress(){

const completed =

tasks.filter(
task=>task.completed
).length;

const total =
tasks.length;

const percent =

total===0

?0

:Math.round(
(completed/total)*100
);

progressBar.style.width=
percent+"%";

progressBar.innerText=
percent+"%";

}