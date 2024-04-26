const inputDOM = document.getElementById("input");
const resultDOM = document.getElementById("result");

const addSymbol = (symbol) => {
    inputDOM.innerText = inputDOM.innerText + symbol;
}

const clearDisplay = () => {
    inputDOM.innerText = '';
    resultDOM.innerText = '';
}

const calculate = () => {
    try {
        resultDOM.innerText = eval(inputDOM.innerText);
    } catch (error) {
        console.log(error);
    }
}