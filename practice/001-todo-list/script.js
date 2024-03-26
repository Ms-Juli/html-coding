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
            
            li.addEventListener("click", () => {
                list[index].complited = !list[index].complited;
                render();
            })

            li.addEventListener("contextmenu", () => {
            
                list.splice(index, 1);

                render();
            });
            listDOM.appendChild(li);
        }
    )
}

render();

inputDOM.addEventListener("keypress", (event) => {
    if(event.key === "Enter" && inputDOM.value.length > 3) {
        const todo = {
            text: inputDOM.value, complited: false
        }

        list.push(todo);

        inputDOM.value = "";

        render();
    } 
})