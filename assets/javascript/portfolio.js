let details = new Map();
details.set("tickitNGo",
    "Tickit N' Go is a web app where people can sell their last-minute nearby event tickets when they are unable to attend. " +
    "The sale is done via a bidding process where registered users can place offers in real time. " +
    "Relevant tickets for sale are shown to users based on their location when they visit the app. " +
    "Several APIs are used for database management, authentication and geo-localization. ");

details.set("hangman",
    "Inspired in the classic game of Hangman, this wine-themed re-twist uses Javascript for dynamic HTML content that engages the user" +
    "in a very entertaining game about wine grape varietals. Colorful CSS compliments the experience. ");

details.set("rpg",
    "The Grand Fight is a role playing game that pays tribute to one of the most revolutionary and ground-breaking fighting games in history. " +
    "The game engine is powered by jQuery which handles the visuals, game logic and special effects. ");

details.set("trivia",
    "Trivia is a game that demonstrates the use of jQuery and Javascript to create interactive content based on timers and special visual effects. " +
    "More questions can be easily added as the game engine was built with scalability in mind. ");

details.set("giftastic",
    "GifTastic is a web app that showcases the interaction of Restful APIs and jQuery / Javascript to produce dynamic HTML content. " +
    "Users can personalize the experience by adding buttons that will show animated GIFs of their choice. ");

details.set("rps",
    "This app is a reloaded version of the classic game Rock, Paper and Scissors. It is a real-time online multiplayer game where participants can join " +
    "the game asynchronously. The app also features a chat where anyone (players and observers) can communicate in real time. " +
    "Google's Firebase and jQuery are the technologies used on this game. ");


let technologies = new Map();
technologies.set("tickitNGo", ["html", "css", "javascript", "jQuery", "firebaseDb", "firebaseAu", "firebaseUi", "sweetAlert", "googleMaps", "fontAwesome"]);
technologies.set("hangman", ["html", "css", "javascript"]);
technologies.set("rpg", ["html", "css", "javascript", "jQuery"]);
technologies.set("trivia", ["html", "css", "javascript", "jQuery", "fontAwesome"]);
technologies.set("giftastic", ["html", "css", "javascript", "jQuery"]);
technologies.set("rps", ["html", "css", "javascript", "jQuery", "firebaseDb"]);

let source = new Map();
source.set("tickitNGo", ["https://github.com/Project1-Team3/Project1", "https://project1-team3.github.io/Project1/"]);
source.set("hangman", ["https://github.com/b4ruch/Word-Guess-Game", "https://b4ruch.github.io/Word-Guess-Game/"]);
source.set("rpg", ["https://github.com/b4ruch/unit-4-game", "https://b4ruch.github.io/unit-4-game/"]);
source.set("trivia", ["https://github.com/b4ruch/TriviaGame", "https://b4ruch.github.io/TriviaGame/"]);
source.set("giftastic", ["https://github.com/b4ruch/GifTastic", "https://b4ruch.github.io/GifTastic/"]);
source.set("rps", ["https://github.com/b4ruch/RPS-Multiplayer", "https://b4ruch.github.io/RPS-Multiplayer/"]);


let icons = new Map();
icons.set("html", "<img class='mt-1 ico' src='assets/images/html.png' alt='HTML 5' title='HTML 5'>");
icons.set("css", "<img class='mt-1 ico' src='assets/images/css.png' alt='CSS 3' title='CSS 3'>");
icons.set("javascript", "<img class='mt-1 ico' src='assets/images/javascript.png' alt='Javascript' title='Javascript'>");
icons.set("jQuery", "<img class='mt-1 ico' src='assets/images/jQuery.png' alt='jQuery' title='jQuery'>");
icons.set("firebaseDB", "<img class='mt-1 ico' src='assets/images/firebaseDB.png' alt='Firebase DB' title='Firebase DB'>");
icons.set("firebaseAu", "<img class='mt-1 ico' src='assets/images/firebaseAu.png' alt='Firebase Authentication' title='Firebase Authentication'>");
icons.set("firebaseUi", "<img class='mt-1 ico' src='assets/images/firebaseUi.ico' alt='Firebase UI' title='Firebase UI'>");
icons.set("sweetAlert", "<img class='mt-1 ico' src='assets/images/sweetAlert.png' alt='Sweet Alert 2' title='Sweet Alert 2'>");
icons.set("googleMaps", "<img class='mt-1 ico' src='assets/images/googleMaps.png' alt='Google Maps' title='Google Maps'>");
icons.set("fontAwesome", "<img class='mt-1 ico' src='assets/images/fontAwesome.png' alt='Font Awesome' title='Font Awesome'>");

let projectInfoFlag = false; //toggles project info section just once


function printSource(ele) {
    let src = source.get(ele.attr("id"))[0];
    let web = source.get(ele.attr("id"))[1];

    $("#sourceCode").attr("href", src);
    $("#website").attr("href", web);
}

function printTechnologies(ele) {
    $("#projectTechnologies").html("<h5 class='text-center mt-3 mb-3'>Technologies used</h5>");
    let tech = technologies.get(ele.attr("id"));
    tech.forEach(technology => {
        $("#projectTechnologies").append(icons.get(technology));
    });
}

function populateDetails() {

    if (!projectInfoFlag) {
        $("#projectInfo").toggle();
        projectInfoFlag = true;
    }

    $("#detailsContainer").hide();
    $("#projectDescription").text(details.get($(this).attr("id")));
    printTechnologies($(this));
    printSource($(this));
    $("#detailsContainer").fadeIn("slow");

}

$(document).ready(function () {
    $(".project_div").click(populateDetails);

});