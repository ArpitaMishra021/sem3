
const questions = [
    {
        question: "What does br tag do?",
        options: [
            "Makes the text italic",
            "Makes the text bold",
            "Takes the cursor to the next line"
        ],
        answer: 2
    },

    {
        question: "What does JS stand for?",
        options: [
            "Just Skating",
            "Justin Skyer",
            "JavaScript"
        ],
        answer: 2
    },

    {
        question: "Backend designing of a webpage is done using?",
        options: [
            "Node.js",
            "JavaScript",
            "CSS"
        ],
        answer: 0
    },

    {
        question: "What is the full form of CSS?",
        options: [
            "Currency Style Status",
            "Cascading Style Sheet",
            "Cornerstone Style Sheet"
        ],
        answer: 1
    },

    {
        question: "Which symbol is used for a single line comment in JS?",
        options: [
            "//",
            "#",
            "!!"
        ],
        answer: 0
    }
];


let currentQuestion = 0;
let score = 0;

let studentName = "";
let studentClass = "";


function showQuestion() {

    document.getElementById("question").innerText =
        questions[currentQuestion].question;

    document.getElementById("option0").innerText =
        questions[currentQuestion].options[0];

    document.getElementById("option1").innerText =
        questions[currentQuestion].options[1];

    document.getElementById("option2").innerText =
        questions[currentQuestion].options[2];
}


// Start Quiz
document.getElementById("start-btn").onclick = function () {

    studentName = document.getElementById("student-name").value;
    studentClass = document.getElementById("student-class").value;

    if (studentName == "" || studentClass == "") {
        alert("Please enter your name and class");
        return;
    }

    document.getElementById("student-details").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    showQuestion();
};


// Keyboard events for selecting options
document.addEventListener("keydown", function(event) {

    if (document.getElementById("quiz").style.display != "block") {
        return;
    }

    if (event.key == "1") {
        document.querySelector('input[value="0"]').checked = true;
    }

    if (event.key == "2") {
        document.querySelector('input[value="1"]').checked = true;
    }

    if (event.key == "3") {
        document.querySelector('input[value="2"]').checked = true;
    }

});


// Next button
document.getElementById("next-btn").onclick = function () {

    let selected = document.querySelector(
        'input[name="option"]:checked'
    );

    if (selected == null) {
        alert("Please select an option");
        return;
    }

    let selectedValue = Number(selected.value);
    let correctAnswer = questions[currentQuestion].answer;

    // Change option colour
    if (selectedValue == correctAnswer) {

        selected.parentElement.style.backgroundColor = "lightgreen";
        score++;

    } else {

        selected.parentElement.style.backgroundColor = "lightcoral";

        // Also show the correct answer
        document.querySelector(
            'input[value="' + correctAnswer + '"]'
        ).parentElement.style.backgroundColor = "lightgreen";
    }


    currentQuestion++;


    if (currentQuestion < questions.length) {

        setTimeout(function() {

            selected.parentElement.style.backgroundColor = "";
            
            document.querySelector(
                'input[value="' + correctAnswer + '"]'
            ).parentElement.style.backgroundColor = "";

            selected.checked = false;

            showQuestion();

        }, 500);

    } else {

        setTimeout(function() {

            document.getElementById("question").innerText =
                "Quiz Completed!";

            document.getElementById("options").style.display = "none";

            document.getElementById("next-btn").style.display = "none";

            document.getElementById("score").innerText =
                "Name: " + studentName +
                "\nClass: " + studentClass +
                "\nYour Score: " + score + " / " + questions.length;

        }, 500);
    }
};