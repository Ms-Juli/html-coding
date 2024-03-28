const questionsDOM = document.querySelectorAll(".question");

questionsDOM.forEach((questionDOM) => {

    const questionHeaderDOM = questionDOM.querySelector(".question-header");
    questionHeaderDOM.addEventListener("click", () => {
        questionDOM.classList.toggle("active-question")
    })
});

const menuDOM = document.querySelectorAll("li");
const faqDOM = document.getElementById("faq");
const paymentDOM = document.getElementById("payment");
const deliveryDOM = document.getElementById("delivery");
const returnDOM = document.getElementById("return");
const complaintDOM = document.getElementById("complaint");

const menu = [
    {
        name: "faq", 
        section: faqDOM,
        item: menuDOM[0]
    }, 
    {
        name: "payment", 
        section: paymentDOM,
        item: menuDOM[1]
    }, 
    {
        name: "delivery", 
        section: deliveryDOM,
        item: menuDOM[2]
    }, 
    {
        name: "return", 
        section: returnDOM,
        item: menuDOM[3]
    }, 
    {
        name: "complaint", 
        section: complaintDOM,
        item: menuDOM[4]
    }
];

menu.forEach((element) => {
    element.item.addEventListener("click", () => {
        menu.forEach((item) => {
            item.section.style.display = "none";
            item.item.classList.remove("active-li");
        });
        element.section.style.display = "block";
        element.item.classList.toggle("active-li");
    });
});
