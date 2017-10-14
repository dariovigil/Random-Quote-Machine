/*jshint esversion: 6 */
const url = "http://quotesondesign.com/wp-json/posts?";
// let quote = "";
//
// REQUEST API
//
const req = new Request(url);
const myResponse = fetch(req)
    .then((function(response) {
      return(response.json())
    .then(function(quote) {
      renderQuote(quote);
      // myQuote.push(quote[0]);
    });
    }));

function renderQuote(quote) {
  console.log(quote[0].content);
}
// const myQuote = [];
// console.log(myQuote.content);
// console.log(myQuote);


