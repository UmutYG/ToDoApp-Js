const request = new XMLHttpRequest();
request.open("GET",'https://programming-quotes-api.herokuapp.com/quotes/random');
request.send();
const quoteText = document.querySelector("#quote");

// callback
request.addEventListener('load', ()=>{
    const data = JSON.parse(request.responseText);
    quoteText.textContent = data.en;
    author.textContent = data.author;
});

renderTasks("all");


