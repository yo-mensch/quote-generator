//console.log("Hello world");

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');

//get quote from api
async function getQuote(){
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
        //console.log(data);
    } catch(error){
        getQuote();
        //console.log("Oopsie doopsie, no quote ", error);
    }
}

// On load
getQuote();