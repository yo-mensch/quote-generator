//console.log("Hello world");

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
//const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//hide loading

function complete(){
    if(!loader.hidden){
        quoteContainer.hidden=false;
        loader.hidden = true;
    }
}

//get quote from api
async function getQuote(){
    loading();
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try{
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();

        if(data.quoteAuthor===''){
            authorText.innerText = "Unknown";
        } else{
            authorText.innerText = data.quoteAuthor;
        }
        quoteText.innerText = data.quoteText;

        if(data.quoteText.length>120){
            quoteText.classList.add("long-quote");
        } else{
            quoteText.classList.remove("long-quote");
        }
        complete();
        //console.log(data);
    } catch(error){
        getQuote();
        //console.log("Oopsie doopsie, no quote ", error);
    }
}

// On load
getQuote();

// on click
$("#new-quote").on("click", function(){
    getQuote();
});