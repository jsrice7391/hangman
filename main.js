var guessed = [];
var dictionary = ["Alaska", "Alabama", "Arkansas", "Arizona", "california", "Florida"];
var word = dictionary[Math.floor(Math.random() * dictionary.length)].toLowerCase().split("");
var missed = 15;
var missed_guesses = [];

var letter_count = 0;



function show_span(letter) {
    $.each(word, function(i, l) {
        $("#blanks_list").append("<li class='inline'><p>" + l + "</p></li>");
        guessed.push(letter);
    })

    console.log(letter);
};

function show_letter(letter) {
    guessed.push(letter);
    $.each(word, function(i, l) {
        if (letter === l) {
            $('ul li').find('p').eq(i).addClass("show");
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

    $("#guessed").html(missed_guesses);

    $(".inline p").hide();

    $("#the_word").html(word);


    $("#play_again").hide();
    $("#winner").hide();



    $("#play_again").on("click", function() {
        get_number();
    })



    document.onkeydown = function(letter) {

        var letter = letter.key;

        if (word.includes(letter)) {
            show_letter(letter);

        } else {
            console.log("No, there is no " + letter);
            missed_guesses.push(letter);

            missed = missed - 1;
            $("#guesses").html(missed);
            $("#guessed").html(missed_guesses);
        }
        if ($('ul li').children(':visible').length == word.length) {
            $("#winner").show();
            // action when all are hidden
        }






        if (missed == 0) {
            $("#guess_span").html("YOU HAVE NO MORE GUESSES");
            $("#play_again").show();
            $("guessed").hide();
        };





    };
});