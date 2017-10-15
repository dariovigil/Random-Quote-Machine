/*jshint esversion: 6 */
const quoteContainer = document.querySelector('.quote-text');
const newQuoteBtn = document.querySelector('.new-quote-btn');
const authorContainer = document.querySelector('.quote-author');
const twitterBtn = document.querySelector('.tweet-quote-btn');
newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);
const url = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
const currentQuote = [];
const currentAuthor = [];
//
// REQUEST API WITH FETCH
//
// function getQuote(evt) {
//   const myHeaders = new Headers();
//   const myInit = {
//       method: 'GET',
//       headers: myHeaders,
//       mode: 'cors',
//       cache: 'no-store'
//   };
//   const req = new Request(url);
//   const myResponse = fetch(req, myInit)
//       .then((function(response) {
//         return(response.json())
//       .then(function(quote) {
//         console.log(quote);
//         renderQuote(quote);
//       });
//       }));
// }
// //
// // REQUEST API WITH JQUERY
// //
function getQuote() {
  // evt.preventDefault();
  $.ajax( {
    url: url,
    cache: false,
    success: function(data) {
      renderQuote(data);},
  });
}

function renderQuote(quote) {
  quoteContainer.innerHTML = quote[0].content;
  authorContainer.innerHTML = `- ${quote[0].title}`;
}
function openURL(url){
  window.open(url, 'Share', 'width=650, height=500, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}
function tweetQuote(){
  openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quoteContainer.innerText + '" ' + authorContainer.innerHTML));
    }
