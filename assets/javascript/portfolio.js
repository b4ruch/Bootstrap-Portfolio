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

details.set("liri",
    "LIRI stands for Language Interpretation Recognition Interface.  This app is built on Node JS and provides a command line interface where the user can input " +
    "commands to retrieve data of interest from different information sources. Currently LIRI supports Twitter, Spotify and IMDB. It also accepts a script file " +
    "to read commands from. All program input and output is kept in a log file.");

details.set("HangmanCli",
    "This is a reinterpretation of the classic word guess game Hangman.  The app uses NodeJs, Inquirer and an approach based on constructor functions to implement the game engine." +
    "This is a command line interface app");

details.set("bamazon",
    "Shop storefront built with NodeJs + MySQL" +
    "This is a CLI application that offers the following functionalities: " +
    "--Customer View: Buy Product " +
    "--Manager View: View products for Sale, View Low Inventory, Add to Inventory, Add New Product " +
    "--Supervisor View: View Product Sales by Department, Create New Department");

details.set("friendfinder",
    "Friend Finder is a compatibility-based social friendship application. This full-stack site will take in results from users' surveys, " +
    "then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.");

details.set("burguer",
    "Burguer is a logger app built with MySQL, Node, Express, Handlebars and a homemade ORM. " +
    "The application follows the MVC design pattern.");

details.set("burguer2",
    "Burguer 2 The Sequel, uses Sequilize as ORM instead of a custom-made one. The application follows the MVC design pattern.");

details.set("friendify",
    "Friendify is made to enable social connections wherever you go.  While traveling around the world, you can connect to travelmates that share the same interests." +
    "The application is built using the MVC approach and uses technologies such as NodeJs, Express, MySQL, Sequelize, Handlebars, Google Geolocation among others.");

let technologies = new Map();
technologies.set("tickitNGo", ["html", "css", "javascript", "jQuery", "firebaseDB", "firebaseAu", "firebaseUi", "sweetAlert", "googleMaps", "fontAwesome"]);
technologies.set("hangman", ["html", "css", "javascript"]);
technologies.set("rpg", ["html", "css", "javascript", "jQuery"]);
technologies.set("trivia", ["html", "css", "javascript", "jQuery", "fontAwesome"]);
technologies.set("giftastic", ["html", "css", "javascript", "jQuery"]);
technologies.set("rps", ["html", "css", "javascript", "jQuery", "firebaseDB"]);
technologies.set("liri", ["nodeJs"]);
technologies.set("HangmanCli", ["nodeJs", "javascript"]);
technologies.set("bamazon", ["nodeJs", "javascript", "mysql"]);
technologies.set("friendfinder", ["nodeJs", "javascript", "express"]);
technologies.set("burguer", ["nodeJs", "javascript", "express", "mysql", "handlebars"]);
technologies.set("burguer2", ["nodeJs", "javascript", "express", "mysql", "handlebars", "sequelize"]);
technologies.set("friendify", ["nodeJs", "javascript", "express", "mysql", "handlebars", "sequelize", "google maps"]);


let source = new Map();
source.set("tickitNGo", ["https://github.com/Project1-Team3/Project1", "https://project1-team3.github.io/Project1/"]);
source.set("hangman", ["https://github.com/b4ruch/Word-Guess-Game", "https://b4ruch.github.io/Word-Guess-Game/"]);
source.set("rpg", ["https://github.com/b4ruch/unit-4-game", "https://b4ruch.github.io/unit-4-game/"]);
source.set("trivia", ["https://github.com/b4ruch/TriviaGame", "https://b4ruch.github.io/TriviaGame/"]);
source.set("giftastic", ["https://github.com/b4ruch/GifTastic", "https://b4ruch.github.io/GifTastic/"]);
source.set("rps", ["https://github.com/b4ruch/RPS-Multiplayer", "https://b4ruch.github.io/RPS-Multiplayer/"]);
source.set("liri", ["https://github.com/b4ruch/liri-node-app", "https://github.com/b4ruch/liri-node-app"]);
source.set("HangmanCli", ["https://github.com/b4ruch/HangmanCLI", "https://github.com/b4ruch/HangmanCLI"]);
source.set("bamazon", ["https://github.com/b4ruch/bamazon", "https://github.com/b4ruch/bamazon"]);
source.set("friendfinder", ["https://github.com/b4ruch/Friend-Finder", "https://friend-finder-b4.herokuapp.com/"]);
source.set("burguer", ["https://github.com/b4ruch/burger", "https://friend-finder-b4.herokuapp.com/"]);
source.set("burguer2", ["https://github.com/b4ruch/burger", "https://friend-finder-b4.herokuapp.com/"]);
source.set("friendify", ["https://github.com/LazyLoaders/Project2", "https://serene-atoll-41113.herokuapp.com/"]);


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
icons.set("nodeJs", "<img class='mt-1 ico' src='assets/images/nodeJs.png' alt='Node JS' title='Node JS'>");
icons.set("mysql", "<img class='mt-1 ico' src='assets/images/mysql.png' alt='MySQL' title='MySQL'>");
icons.set("express", "<img class='mt-1 ico' src='assets/images/express.png' alt='Express' title='Express'>");
icons.set("handlebars", "<img class='mt-1 ico' src='assets/images/handlebars.png' alt='Handlebars' title='Handlebars'>");
icons.set("sequelize", "<img class='mt-1 ico' src='assets/images/sequelize.png' alt='Sequelize' title='Sequelize'>");
icons.set("google maps", "<img class='mt-1 ico' src='assets/images/google_maps.png' alt='Google Maps API' title='Google Maps API'>");

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
        // debugger;
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