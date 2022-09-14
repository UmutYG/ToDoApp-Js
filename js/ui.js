function renderTasks(filter)
{
    accordion.innerHTML = "";
    let rendererHtml = ``;
    if(ToDoS.length == 0)
    {
        rendererHtml += `
        <div class="alert alert-primary" role="alert">
            No Tasks!
        </div>
`
    }
    for(let task of ToDoS)
    { 
        let completed = task.completed == "completed" ? "done" : "";
        let statusIcon = task.completed == "pending" ? "fa-solid fa-check" : "fa-solid fa-rotate-left";
        if(filter == "all" || task.completed == filter)
        {
            rendererHtml += `
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button ${completed}" type="button" data-bs-toggle="collapse" data-bs-target="#a${task.id}" aria-expanded="true" aria-controls="collapseOne">
                        ${task.task}
                        </button>
                        <div class="icons">
                            <a href="#" onclick="editTask(${task.id})"><i class="fa-solid fa-pen-to-square fa-sm"></i></a>
                            <a href="#" onclick="deleteTask(${task.id})"><i class="fa-solid fa-trash fa-sm"></i></a>
                            <a href="#" id="status" onclick="finishTask(${task.id})"><i class="${statusIcon}"></i></a>
                            
                        </div>
                    </h2>
                    <div id="a${task.id}" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            
                        ${task.description}
                        </div>
                    </div>
                </div>
                `
        }
        
    }
    accordion.insertAdjacentHTML("beforeend", rendererHtml);
}