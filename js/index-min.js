/*jshint esversion: 6 */
const quoteContainer = document.querySelector('.quote-text');
const newQuoteBtn = document.querySelector('.new-quote-btn');
const authorContainer = document.querySelector('.quote-author');
newQuoteBtn.addEventListener('click', getQuote);
googleCustomSearchAPIkey = 'AIzaSyDBm5H1wNfavWFdiEVk2i1mSePURSBnwIo';
const url = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
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
      console.log(data);
      renderQuote(data);},
  });
}

function renderQuote(quote) {
  quoteContainer.innerHTML = quote[0].content;
  authorContainer.innerHTML = `- ${quote[0].title}`;
}


