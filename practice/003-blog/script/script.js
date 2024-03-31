const btnMenuDom = document.getElementById("menu");
const menuPanelDom = document.getElementById("menu-panel");

btnMenuDom.addEventListener("click", () => {
    if (btnMenuDom.innerText === "Menu") {
        btnMenuDom.innerText = "Close";
    } else {
        btnMenuDom.innerText = "Menu";
    }
    
    menuPanelDom.classList.toggle("open");
});

