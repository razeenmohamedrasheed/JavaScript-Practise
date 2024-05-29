// console.log(taskValue)
let data = []

function getValue(){
    let taskValue = document.getElementById('task').value;
    if(taskValue){
        data.push(taskValue)
        appendTableBody(taskValue)
        document.getElementById('task').value = ''
    }
    
}

function appendTableBody(task) {
    let tableBody = document.getElementById('taskBody');
    let newRowdata = document.createElement('tr');
    newRowdata.innerHTML = `<td>${task}</td><td><button class="btn btn-danger" onclick="deleteTask(this)">Delete</button></td>`;
    tableBody.appendChild(newRowdata);
}

function deleteTask(button){
    let row = button.closest('tr');
    row.remove();
}