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
}
