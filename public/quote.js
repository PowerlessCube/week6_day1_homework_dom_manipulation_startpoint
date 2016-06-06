// XXX: Create an array of the existing quotes, each quote having text and author.

var Quote = function(text, author) {
  this.text = text;
  this.author = author;
};

var quote1 = new Quote( "Visual Basic is the way forward, I don't know why we are doing JavaScript.", "Jay Chetty" );
var quote2 = new Quote( "The only CSS you need to know is background-color: tomato", "Rick" );
var quote3 = new Quote( "I used the jQuery diet plugin and lost 10kg in a week.", "Keith" );
var quote4 = new Quote( "Scaffolding is nothing but a fiery hell.", "Valerie" );
var quote5 = new Quote( "That is quite obviously a frog.", "Jay Chetty" );

var quotes = [ quote1, quote2, quote3, quote4, quote5 ];
