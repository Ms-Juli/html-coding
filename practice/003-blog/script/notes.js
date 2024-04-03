const notesDOM = document.querySelector(".list");

const notes = [
    {
        date: "2024-04-03",
        quote: "Lorem Ipsum. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        authorName: "— Marc Hemeon",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat leo viverra eros vehicula mollis. Suspendisse iaculis sapien at ligula hendrerit tristique. In hac habitasse platea dictumst. Duis ut nisl ac est hendrerit pretium quis a diam."
    },
    {
        date: "2024-04-03",
        quote: "Lorem Ipsum. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        authorName: "— Marc Hemeon",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat leo viverra eros vehicula mollis. Suspendisse iaculis sapien at ligula hendrerit tristique. In hac habitasse platea dictumst. Duis ut nisl ac est hendrerit pretium quis a diam."
    },
    {
        date: "2024-04-03",
        quote: "Lorem Ipsum. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        authorName: "— Marc Hemeon",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat leo viverra eros vehicula mollis. Suspendisse iaculis sapien at ligula hendrerit tristique. In hac habitasse platea dictumst. Duis ut nisl ac est hendrerit pretium quis a diam."
    },
    {
        date: "2024-04-03",
        quote: "Lorem Ipsum. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        authorName: "— Marc Hemeon",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat leo viverra eros vehicula mollis. Suspendisse iaculis sapien at ligula hendrerit tristique. In hac habitasse platea dictumst. Duis ut nisl ac est hendrerit pretium quis a diam."
    }
];

const render = () => {
    notes.forEach(
        (item) => {
            const itemElement = document.createElement("li");
            itemElement.classList.add("item");

            const dateElement = document.createElement("div");
            dateElement.classList.add("date");
            dateElement.innerText = item.date;

            const quoteElement = document.createElement("div");
            quoteElement.classList.add("quote");
            quoteElement.innerText = item.quote;

            const authorNameElement = document.createElement("div");
            authorNameElement.classList.add("author-name");
            authorNameElement.innerText = item.authorName;

            const commentElement = document.createElement("div");
            commentElement.classList.add("comment");
            commentElement.innerText = item.comment;

            itemElement.appendChild(dateElement);
            itemElement.appendChild(quoteElement);
            itemElement.appendChild(authorNameElement);
            itemElement.appendChild(commentElement);

            notesDOM.appendChild(itemElement);
        }
    )
}

render();