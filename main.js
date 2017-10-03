var guessed = [];
var dictionary = ["Alaska", "Alabama", "Arkansas", "Arizona", "california", "Florida"];
var word = dictionary[Math.floor(Math.random() * dictionary.length)].split("");
var missed = 15;
var dash = "  ____  ";
var dashes = [];
var indexes = [];

function get_number() {
    var dictionary = ["Alaska", "Alabama", "Arkansas", "Arizona", "California", "Florida"];
    var word = dictionary[Math.floor(Math.random() * dictionary.length)].split("");
    var arrd = new String("_", word.Length);

}

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











$(document).ready(function() {

    show_span(word);
    $("#guessed").html(guessed);

    $(".inline p").hide();







    $("#the_word").html(word);
    console.log(word);
    console.log(dashes);

    $("#play_again").hide();

    $("#play_again").click(get_number);





    document.onkeydown = function(letter) {

        var letter = String.fromCharCode(letter.keyCode).toLowerCase();
        guessed.push(letter);

        if (word.includes(letter)) {
            show_letter(letter);

        } else {
            console.log("No, there is no " + letter);
            guessed.push(letter);
            missed = missed - 1;
            $("#guesses").html(missed);
        }

        if (missed == 0) {
            $("#guess_span").html("YOU HAVE NO MORE GUESSES");
            $("#play_again").show();

            return


        };





    };
});