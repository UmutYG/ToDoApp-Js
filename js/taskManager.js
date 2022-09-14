function manageTasks()
{
    if(managerButton.textContent == "Edit")
    {
        let onEditingTask = ToDoS.find(toDo=>toDo.id == editingId);
        onEditingTask.description = taskDescription.value;
        onEditingTask.task = taskHeader.value;
    }
    else
    {
        ToDoS.push({"id" : ToDoS.length + 1, "task":taskHeader.value, "completed":"pending", "description":taskDescription.value});
    }
    clearInputs();
    managerButton.textContent = "Add";
    renderTasks("all");
    localStorage.setItem("ToDoS",JSON.stringify(ToDoS));
}



function editTask(taskId)
{
    let editTask;
    managerButton.textContent = "Edit";
    for(let task of ToDoS)
    {
        if (task.id == taskId)
        {
            editTask = task;
            break;
        }
            
    }
    taskHeader.value = editTask.task;
    taskDescription.value = editTask.description;
    editingId = taskId;
   
}

function deleteTask(taskId)
{
    ToDoS.splice(ToDoS.findIndex(i=>i.id == taskId),1);
    renderTasks("all");
}


function finishTask(taskId)
{
    let task = ToDoS.find(i=>i.id == taskId);
    task.completed == "pending" ? task.completed = "completed" : task.completed = "pending";
    renderTasks("all");

    
}

function clearInputs()
{
    taskHeader.value = "";
    taskDescription.value = "";
}
