//console.log("Hello world");
//get quote from api
async function getQuote(){
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch(error){
        console.log("Oopsie doopsie, no quote ", error);
    }
}

// On load
getQuote();