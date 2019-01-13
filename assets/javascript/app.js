var questions = [{
    ques: "Who plays Sherlock Homles in BBC TV's 'Sherlock'?",
    ans: ["Benedict Cumberbatch", "Martin Freeman", "Daniel Radcliffe", "Tom Hiddleton"],
    name: "Sherlock",
    correct: "Benedict Cumberbatch",
    divClass: ".actor"
},
{
    ques: "Co-Creator Mark Gatiss plays which charactor on the show?",
    ans: ["John Watson", "Jim Moriarty", "Mycroft Holmes", "Greg Lestrade"],
    name: "Gatiss",
    correct: "Mycroft Holmes",
    divClass: ".gatiss"
},
{
    ques: "Which is the address of Sherlock?",
    ans: ["123b Baker Street", "221b Baker Street", "21 Jump Streen", "1600 Pennsylvania Avenue"],
    name: "address",
    correct: "221b Baker Street",
    divClass: ".address"
},
{
    ques: "In'A Study in Pink', who introduced John Watson to Sherlock?",
    ans: ["Stamford", "Hooper", "Lestrade", "the Queen"],
    name: "intro",
    correct: "Stamford",
    divClass: ".intro"
},
{
    ques: "In 'His Last Vow', what is the name of Charles Augustus Magnussen's mansion?",
    ans: ["Hildene", "Sleepy Hollow", "Appledore", "The Mind Palace"],
    name: "Mansion",
    correct: "Appledore",
    divClass: ".mansion"
},
{
    ques: "What fictional place did Sherlock name his memory technique?",
    ans: ["Mind Palace", "Mirror Dimension", "Karmar-Taj", "Sanctum"],
    name: "place",
    correct: "Tinker Hatfield",
    divClass: ".place"
},
{
    ques: "What is John Watson's middle name?",
    ans: ["Henry", "Harold", "Hamish", "Harvey"],
    name: "middle",
    correct: "Hamish",
    divClass: ".middle"
},
{
    ques: "In season 3, who believed Sherlock was still alive and had various theories to prove it?",
    ans: ["Molly Hooper", "John Watson", "Sally Donovan", "Philip Anderson"],
    name: "alive",
    correct: "Philip Anderson",
    divClass: ".alive"
},
{
    ques: "What is Mrs.Hudson's code word for Sherlock when is being cocky or overconfident?",
    ans: ["Snobby", "Norbury", "Nob Hill", "Thornton"],
    name: "Hudson",
    correct: "Norbury",
    divClass: ".hudson"
},
{
    ques: "What is the name of Sherlock's Childhood friend in 'The Final Problem'?",
    ans: ["Andrew", "Mark", "Victor", "Martin"],
    name: "friend",
    correct: "Victor",
    divClass: ".friend"
}
] // end questions object

var labels = ["first", "second", "third", "forth"];

// click to start then display quesions
var startGame = $("#start-btn").on('click', function() {
$(this).parent().hide();
$('.container').show();
countdown(100);
questionDisplay();
});

// function for displaying questions
var questionDisplay = function() {
$(".questions :not('#sub-but')").empty();
// loops through the 10 questions 
for (var j = 0; j < 10; j++) {
$('.questions').prepend('<div class="' + questions[j].name + '"></div>');
$(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
// loops through answers for each radio button
for (var i = 0; i <= 3; i++) {
    $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
}
$('.questions').prepend('<hr />');
}
}


// function for countdown timer
var countdown = function(seconds) {

var timer = setInterval(function() {
seconds = seconds - 1;
$("#time-remain").html(seconds);

if (seconds <= 0) {
    $('.container').fadeOut(500);
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    // loop through correctArray & radioName to match html elements & answers
    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
            console.log("this is correct! number:" + i)
        } else {
            wrongAnswers++;
            console.log("this is wrong! number:" + i)
        };
    }
    $('#correctTimesUp').append(correctAnswers);
    // display wrongAnswers
    $('#wrongTimesUp').append(wrongAnswers);
    $('#timesUp').fadeIn(1000).show();

    // alert("Times Up!");
    clearInterval(timer);
    return;
}
}, 1000);

// click event for submit button to stop timer
$('#sub-but').on('click', function() {
clearInterval(timer);
})
}; // end countdown


// function to grade quiz once submit button is clicked
var gradeQuiz = $('#sub-but').on('click', function() {

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;

// loop through correctArray & radioName to match html elements & answers
for (var i = 0; i < 10; i++) {

if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

    correctAnswers++;
} else {
    wrongAnswers++;
};
};

// once submit is clicked...
// tests
// stop timer
countdown();
// fade out questions
$('.container').fadeOut(500);
// show answerScreen
$('#gameScreen').show();
// display correctAnswers
$('#correct').append(correctAnswers);
// display wrongAnswers
$('#wrong').append(wrongAnswers);

}); // end gradeQuiz