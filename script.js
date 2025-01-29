/*const inputBox=document.getElementById("input-box")
const listContainer=document.getElementById("list-container")

function addTask(){
    if(inputBox.value ===''){
        alert("Please enter a task");
    }
    else{
        let i=document.createElement("li")
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span")
        span.innerHTML="\u00d7";
        li.appendChild(span);

    }
    inputBox.value="";
    saveData();

}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false );

function saveData(){
    localStorage.setItem("data",listContainer,innerHTML);
}

function showtask(){
    listContainer.innerHTM=localStorage.getItem("data")
}
showtask()*/

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a new task
function addTask() {
    if (inputBox.value.trim() === '') {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = inputBox.value;

    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // Close (×) symbol
    li.appendChild(span);

    listContainer.appendChild(li);
    inputBox.value = "";
    saveData();
}

// Event listener for task actions (toggle/check or delete)
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Function to save tasks in localStorage
function saveData() {
    localStorage.setItem("tasks", listContainer.innerHTML);
}

// Function to load saved tasks when the page loads
function showTasks() {
    listContainer.innerHTML = localStorage.getItem("tasks") || "";
}

showTasks();
