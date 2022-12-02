const tasks = [];

printTaskList();

document.getElementById("addTask").addEventListener("click", function () {
    addTask();
    
})

function addTask(){
    let taskName = document.getElementById("txtNewTask").value;
    let taskResponsible = document.getElementById("txtResponsible").value;
    let task = { name: taskName, isDone: false, responsible: taskResponsible};
    tasks.push(task);
    printTaskList();
}

function printTaskList() {
    document.getElementById("taskList").innerHTML = getHTMLTasks();
}

function markTest(){
    alert("marking"); //3. Video 6:32
}

function getHTMLTasks() {
    let html = "";
    let index =0;
    tasks.forEach(element => {
        let checked = "";
        if(element.isDone){
            checked = "checked";
        }
        html += "<li><input onClick='markTask'name ='checkbox' data-index='" + index + "' type='checkbox'" + checked + "/>" + element.name + " - " + element.responsible + index + "</li>";
        index++;
    });
    return html;
}