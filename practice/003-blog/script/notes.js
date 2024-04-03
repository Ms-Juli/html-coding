const notesDOM = document.querySelector(".list");

const notes = [
    {
        date: "2024-04-03",
        quote: "The outcomes are a byproduct of your process.",
        authorName: "— Marc Hemeon",
        comment: "I'm a creature of habits with a massive struggle to find focus for the sake of making a thing. Partly because I don't have a strong sense of what I want to do with my 4000 weeks, but as Marc points out, I'm not convinced that having a sharply defined target is the best way to get anywhere. I have my quirks, my process of making stuff because it all goes somewhere- like these notes."
    },
    {
        date: "2024-04-03",
        quote: "The outcomes are a byproduct of your process.",
        authorName: "— Marc Hemeon",
        comment: "I'm a creature of habits with a massive struggle to find focus for the sake of making a thing. Partly because I don't have a strong sense of what I want to do with my 4000 weeks, but as Marc points out, I'm not convinced that having a sharply defined target is the best way to get anywhere. I have my quirks, my process of making stuff because it all goes somewhere- like these notes."
    },
    {
        date: "2024-04-03",
        quote: "The outcomes are a byproduct of your process.",
        authorName: "— Marc Hemeon",
        comment: "I'm a creature of habits with a massive struggle to find focus for the sake of making a thing. Partly because I don't have a strong sense of what I want to do with my 4000 weeks, but as Marc points out, I'm not convinced that having a sharply defined target is the best way to get anywhere. I have my quirks, my process of making stuff because it all goes somewhere- like these notes."
    },
    {
        date: "2024-04-03",
        quote: "The outcomes are a byproduct of your process.",
        authorName: "— Marc Hemeon",
        comment: "I'm a creature of habits with a massive struggle to find focus for the sake of making a thing. Partly because I don't have a strong sense of what I want to do with my 4000 weeks, but as Marc points out, I'm not convinced that having a sharply defined target is the best way to get anywhere. I have my quirks, my process of making stuff because it all goes somewhere- like these notes."
    },
    {
        date: "2024-04-03",
        quote: "The outcomes are a byproduct of your process.",
        authorName: "— Marc Hemeon",
        comment: "I'm a creature of habits with a massive struggle to find focus for the sake of making a thing. Partly because I don't have a strong sense of what I want to do with my 4000 weeks, but as Marc points out, I'm not convinced that having a sharply defined target is the best way to get anywhere. I have my quirks, my process of making stuff because it all goes somewhere- like these notes."
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