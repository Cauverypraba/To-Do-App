const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === '') {
        alert("Must enter a text!");
    } 
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        let close = document.createElement("close");
        close.innerHTML = "\u00d7";
        li.appendChild(close);
        
        listContainer.appendChild(li);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "CLOSE") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function displayTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

displayTask();
