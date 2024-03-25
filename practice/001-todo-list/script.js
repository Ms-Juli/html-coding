"use strict";
const listDOM = document.getElementById("list");
const inputDOM = document.getElementById("input");

const list = [];

const todo = {
    text: "Task one",
    complited: false
}

const todo2 = {
    text: "Task two",
    complited: true
}

list.push(todo);
list.push(todo2);

const render = () => {
    listDOM.innerText = "";

    list.forEach(
        (item, index) => {
            const li = document.createElement("li");
            li.innerText = item.text;
            li.classList.add("item");

            if(item.complited) {
                li.classList.add("complited");
            }
            
            listDOM.appendChild(li);
        }
    )
}

render();

inputDOM.addEventListener("keypress", (event) => {
    if(event.key === "Enter") {
        const todo = {
            text: inputDOM.value, complited: false
        }

        list.push(todo);

        inputDOM.value = "";

        render();
    } 
})