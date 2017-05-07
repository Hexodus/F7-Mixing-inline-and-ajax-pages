
//Initialize app
var myApp = new Framework7({
    cache: false, // behaviour the same with false | true
    init: false, // prevent app from automatic initialization to fix init event for main page
});   

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: false,
    material: true,
    domCache: true, //enable inline pages
});


myApp.init(); // init app manually after you've attached all handlers

