var guessed = [];
var dictionary = ["Alaska", "Alabama", "Arkansas", "Arizona", "california", "Florida"];
var word = dictionary[Math.floor(Math.random() * dictionary.length)].split("");
var missed = 15;
var dash = "  ____  ";
var dashes = [];
var indexes = [];

function show_span(letter) {
    $.each(word, function(i, l) {
        $("#blanks_list").append("<li class='inline'><p>" + l + "</p></li>");
    })
};

function show_letter(letter) {
    $.each(word, function(i, l) {
        if (letter === l) {
            $('ul li').find('p').eq(i).show();
        }

    });
}

function get_number() {
    var word = dictionary[Math.floor(Math.random() * dictionary.length)].split("");
    return word
}










$(document).ready(function() {

    show_span(word);
    get_number();

    $("#guessed").html(guessed);

    $(".inline p").hide();

    $("#the_word").html(word);


    $("#play_again").hide();


    $("#play_again").on("click", function() {
        get_number();



    })



    document.onkeydown = function(letter) {

        var letter = letter.key;
        guessed.push(letter);

        if (word.includes(letter)) {
            show_letter(letter);

        } else {
            console.log("No, there is no " + letter);
            guessed.push(letter);
            $("#guessed").html(guessed);
            missed = missed - 1;
            $("#guesses").html(missed);
        }

        if (missed == 0) {
            $("#guess_span").html("YOU HAVE NO MORE GUESSES");
            $("#play_again").show();
            $("guessed").hide();
            return



        };





    };
});