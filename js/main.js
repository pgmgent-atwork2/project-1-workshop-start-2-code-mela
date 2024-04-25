function loadFirstQuestion() {
    const $questionElement = document.querySelector(".question");

    // Add question to the question element
    $questionElement.innerHTML = questions[0].question;

    // Add corrent and wrong answers to the answer elements
    const $correctAnswer = document.querySelector(".answer.correct");
    $correctAnswer.innerHTML = questions[0].correctAnswer;

    const $wrongAnswer = document.querySelector(".answer.wrong");
    $wrongAnswer.innerHTML = questions[0].wrongAnswer;

    statusbar(0, questions.length);
}

function loadNextQuestion() {
    const $questionElement = document.querySelector(".question");
    const $correctAnswer = document.querySelector(".answer.correct");
    const $wrongAnswer = document.querySelector(".answer.wrong");

    // Get data-question_index attribute value
    const questionIndex = $questionElement.getAttribute("data-question_index");

    // Add question to the question element
    $questionElement.innerHTML = questions[parseInt(questionIndex) + 1].question;

    // Add corrent and wrong answers to the answer elements
    $correctAnswer.innerHTML = questions[parseInt(questionIndex) + 1].correctAnswer;

    $wrongAnswer.innerHTML = questions[parseInt(questionIndex) + 1].wrongAnswer;

    // Update data-question_index attribute value
    $questionElement.setAttribute("data-question_index", parseInt(questionIndex) + 1);


    // Randomize placement of correct answer
    if ($wrongAnswer.classList.contains('left')) {
        $wrongAnswer.classList.remove('left');
    }

    const random = Math.floor(Math.random() * 5);

    if (random === 1 || random === 3) {
        $wrongAnswer.classList.add('left');
    }

}

function correctAnswerConformation() {
    // Sound
    const sound = new Audio('./media/CorrectSoundEffect.mp3'); 
    sound.play();

    // Visual animation for the correct answer
    const rightAnswerButton = document.querySelector('.answer.correct');
    rightAnswerButton.classList.add('correctEntry');
}

function resetButtons() {
    const $correctAnswer = document.querySelector(".answer.correct");
    const $wrongAnswer = document.querySelector(".answer.wrong");

    $correctAnswer.classList.remove('correctEntry');
    $wrongAnswer.style.top = '0px';
    $wrongAnswer.style.right = '0px';
}

function loadFinalScreen() {
    const $questionElement = document.querySelector(".question");
    const $correctAnswer = document.querySelector(".answer.correct");
    const $wrongAnswer = document.querySelector(".answer.wrong");
    const $restart = document.querySelector(".restart");

    // Add question to the question element
    $questionElement.innerHTML = "Je hebt alle vragen beantwoord!";

    // Hide the answers
    $correctAnswer.style.display = "none";
    $wrongAnswer.style.display = "none";

    // Show the restart button
    $restart.style.display = "flex";

    // Hide statusbar
    document.querySelector('.statusbar').style.opacity = 0
}

function statusbar(activeQuestion, totalQuestions) {
    const statusBar = document.querySelector(".statusbar");
    let spheres = ""

    // Create spheres for each question
    for (let index = 0; index < totalQuestions; index++) {
        spheres += `<div class="sphere ${index === activeQuestion ? 'active' : ""}"></div>`;
    }

    // Add spheres to the statusbar
    statusBar.innerHTML = spheres
}

// ———————————————————————————————————————————————————————————————————

function correctAnswer() {
    const rightAnswerButton = document.querySelector('.answer.correct');

    rightAnswerButton.addEventListener('click', () => {
        // Sound to play when the correct answer is clicked
        correctAnswerConformation();

        // Wait for the sound to finish
        setTimeout(() => {
            // Reset the buttons to their original state
            resetButtons();

            // Check if it's the last question
            const $questionElement = document.querySelector(".question");
            const questionIndex = $questionElement.getAttribute("data-question_index");
            if (parseInt(questionIndex) === questions.length - 1) {
                loadFinalScreen();
                return;
            }

            // Load next question
            loadNextQuestion();

            // Statusbar
            statusbar(parseInt(questionIndex) + 1, questions.length);
            
        }, 1000);

    });
}

function wrongAnswer() {
    const btn = document.querySelector(".answer.wrong");
    const width = window.innerWidth;
    const height = window.innerHeight;

    btn.addEventListener("click", () => {
        let randValueY = (Math.floor(Math.random() * height) - 58) / 1.5;
        let randValueX = (Math.floor(Math.random() * width) - 300) / 1.5;
        
        // Make sure the button is not placed on the correct answer button
        while (!((randValueY > 20 && randValueY < 620) || randValueX < 58)) {
            randValueX = (Math.floor(Math.random() * width) - 300) / 1.5;
            randValueY = (Math.floor(Math.random() * height) - 58) / 1.5;
        }

        // Set the new position of the button
        btn.style.top = randValueY + 'px';
        btn.style.right = randValueX + 'px';
    });
}

// ———————————————————————————————————————————————————————————————————

function init() {
    loadFirstQuestion();
    correctAnswer();
    wrongAnswer();
}

init();