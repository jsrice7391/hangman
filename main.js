console.log("Hello world");

var guessed = [];
var dictionary = ["Alaska", "Alabama", "Arkansas", "Arizona", "California", "Florida"];
var word = dictionary[Math.floor(Math.random() * dictionary.length)].split("");
var missed = 15;
var dash = "  ____  ";

function get_number() {
    var dictionary = ["Alaska", "Alabama", "Arkansas", "Arizona", "California", "Florida"];
    var word = dictionary[Math.floor(Math.random() * dictionary.length)].split("");
    var arrd = new String("_", word.Length);

}

function show_span(array) {
    $.each(word, function(i, l) {
        $("#blanks_list").append(dash);

    })
};

function find_letter(word = word, letter) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            $("#blanks_list").append(letter);
        }
    }
}


show_span(word);





$(document).ready(function() {



    $("#the_word").html(word);
    console.log(word);

    $("#play_again").hide();

    $("#play_again").click(get_number);





    document.onkeyup = function(letter) {

        var letter = String.fromCharCode(letter.keyCode).toLowerCase();



        if (word.includes(letter)) {
            find_letter(word, letter);
            console.log("Yes there is a " + letter);
        } else {
            console.log("No, there is no " + letter);
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