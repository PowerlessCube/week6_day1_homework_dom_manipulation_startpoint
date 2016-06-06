var quotes = [
  quote1 = new Quote( "Visual Basic is the way forward, I don't know why we are doing JavaScript.", "Jay Chetty" )
];

window.onload = function() {
  main();
};

var main = function() {
 var quoteOfTheDay = document.getElementById('quote-of-the-day');
 console.log(quoteOfTheDay);

 var buttons = document.getElementsByTagName('button');
 console.log(buttons[0]);

 var quotes = document.getElementsByClassName('quote');

 var lastQuote = quotes[quotes.length-1];
 console.log(lastQuote.innerText);

 quoteOfTheDay.hidden = true;

 var article = document.getElementsByTagName('article');

 for (var i = 0; i < article.length; i++) {
   article[i].style.backgroundColor = 'wheat';
 }

 createQuote();
 console.log(quote1.text);
 console.log(quote2.text);
 console.log(quotes[0]);
};

function createQuote () {
  var quoteArticle = document.createElement('article');
  quoteArticle.classList.add('quote');

  var blockQuote = document.createElement('blockquote');
  blockQuote.innerText = "Open the pod bay doors Hal";

  var cite = document.createElement('cite');
  cite.innerText = "Dave";

  blockQuote.appendChild(cite);

  quoteArticle.appendChild(blockQuote);

  var quotes = document.querySelector('#quotes');
  quotes.appendChild(quoteArticle);
}

// TODO: Create an array of the existing quotes, each quote having text and author.

// TODO: Add the quotes to the page dynamically with JavaScript

// TODO: Further: - Extend our quote application so that a user can add quotes. (Don't worry about these saving between refreshing page, we'll do this tomorrow)

// TODO: Even Further: - Add functionality to delete quotes - Style page

// TODO: Even Even Further: - While typing show the quote being created at real time.
