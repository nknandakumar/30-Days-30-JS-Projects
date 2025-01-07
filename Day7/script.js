
const quote = document.getElementById('quote');
const author = document.getElementById('author');
//API url
const api = 'http://api.quotable.io/random';

async function quoteHandle(url) {
    let response = await fetch(url);
    let data = await response.json();
    quote.innerHTML = data.content ;
    author.innerHTML = data.author ;

    
}
quoteHandle(api);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "--- by "+author.innerHTML,"Tweet Window","width=600","height=300");
}