// Initialize Firebase
var config = {
    apiKey: "AIzaSyCA02bfa5UIibiywghi3fELmQgkn18fpjs",
    authDomain: "personal-portfolio-bdb63.firebaseapp.com",
    databaseURL: "https://personal-portfolio-bdb63.firebaseio.com",
    projectId: "personal-portfolio-bdb63",
    storageBucket: "personal-portfolio-bdb63.appspot.com",
    messagingSenderId: "657120650232"
};
firebase.initializeApp(config);

db = firebase.database();

//Contact DB reference
let contactMeRef = db.ref("portfolio/contactMe");

class contact {
    constructor(name, email, msg) {
        this.name = name;
        this.email = email;
        this.msg = msg;
        this.dateAdded = firebase.database.ServerValue.TIMESTAMP
    }
}


function addContact(ev) {
    ev.preventDefault();
    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let msg = $("#message").val().trim();

    if (name && email && msg) {
        $("#name").val("");
        $("#email").val("");
        $("#message").val("");
        let person = new contact(name, email, msg);
        contactMeRef.push(person);
    }
    else {
        alert("There are some missing fields");
    }

    contactMeRef.once("child_added").then(function (ds) {

        let thanks = "<div class='card text-white bg-success mb-3'><div class='card-body'><h4 class='card-title'>Thank you!</h4>" +
            "<p class='card-text'>Your message has been sent successfully</p></div></div>";

        $("#contactContainer").html(thanks);

    });

}


$(document).ready(function () {

    $("#submit").click(addContact);

});
