"use strict"
const accordion = document.querySelector("#mainAccordion");
const taskHeader = document.querySelector("#input");
const taskDescription = document.querySelector("#inputDesc");
const managerButton = document.querySelector("#button-add");
const iconManager = document.querySelector("#status");
const author = document.querySelector("#author");
const filters = document.querySelector(".list-group");
let ToDoS = [];
let editingId;
let undo = ` <i class="fa-solid fa-rotate-left"></i>`





for(let filter of filters.children)
{   
    filter.addEventListener("click", function(){
        renderTasks(filter.innerText.toLowerCase())
    });
}

if(localStorage.getItem("ToDoS") != null)
{
    ToDoS = JSON.parse(localStorage.getItem("ToDoS"));
}








