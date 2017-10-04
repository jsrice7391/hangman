var guessed = [];
var dictionary = states = ["Alaska",
    "Alabama",
    "Arkansas",
    "Arizona",
    "California",
    "Colorado",
    "Connecticut",
    "District of Columbia",
    "Delaware",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Iowa",
    "Idaho",
    "Illinois",
    "Indiana",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Massachusetts",
    "Maryland",
    "Maine",
    "Michigan",
    "Minnesota",
    "Missouri",
    "Mississippi",
    "Montana",
    "North Carolina",
    "North Dakota",
    "Nebraska",
    "New Hampshire",
    "New_Jersey",
    "New_Mexico",
    "Nevada",
    "New_York",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Puerto_Rico",
    "Rhode_Island",
    "South_Carolina",
    "South_Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Virginia",
    "VirginIslands",
    "Vermont",
    "Washington",
    "Wisconsin",
    "West Virginia",
    "Wyoming"
]
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
    show_span(word)
    show_letter(word);

}










$(document).ready(function() {
    $("li").find(".ar").css("background-color", "red");

    show_span(word);

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
            var state = "." + word.join("") + "";
            $(".stately").find(state).css("color", "green");
            $("#play_again").show();
        }






        if (missed == 0) {
            $("#guess_span").html("YOU HAVE NO MORE GUESSES");
            $("#play_again").show();
            $("guessed").hide();
        };





    };
});