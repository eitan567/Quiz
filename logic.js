 let currentQuestion = 0;
        let score = 0;
        let answered = false;

        function updateProgressBar() {
            let progress = ((currentQuestion + 1) / questions.length) * 100; // Ensure progress bar is full at the end
            let progressBar = document.querySelector("#progressBar div");
            progressBar.style.width = progress + "%";
        }

        function displayQuestion() {
            answered = false; // Reset answered state
            const questionContainer = document.getElementById('questionContainer');
            const question = questions[currentQuestion];
            let html = `<div class="question"><h2>שאלה ${currentQuestion + 1} מתוך ${questions.length}</h2><p>${question.question}</p>`;
            for (let i = 0; i < question.answers.length; i++) {
                html += `<label><input type="radio" name="answer" value="${i}" onclick="selectAnswer(this)"> ${question.answers[i]}</label>`;
            }
            html += '<button onclick="checkAnswer()">בדוק תשובה</button></div>';
            questionContainer.innerHTML = html;
            document.getElementById('nextButton').style.display = 'none';
            document.getElementById('feedback').innerHTML = '';
            updateProgressBar();
        }

        function startQuiz() {
            document.getElementById('startPage').style.display = 'none';
            document.getElementById('quizContainer').style.display = 'block';
            displayQuestion();
        }

        function selectAnswer(radio) {
            if (answered) return; // Prevent changing the answer after selection
            const labels = document.querySelectorAll('label');
            labels.forEach(label => label.classList.remove('selected'));
            radio.parentElement.classList.add('selected');
        }

        function checkAnswer() {
            if (answered) return; // Prevent multiple checks
            const selectedAnswer = document.querySelector('input[name="answer"]:checked');
            if (selectedAnswer) {
                answered = true; // Lock answer
                const question = questions[currentQuestion];
                const feedback = document.getElementById('feedback');
                if (parseInt(selectedAnswer.value) === question.correct) {
                    feedback.innerHTML = 'תשובתך נכונה, כל הכבוד!';
                    feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--success-color').trim();

                    score++;
                } else {
                    feedback.innerHTML = `התשובה הנכונה היא: ${question.answers[question.correct]}`;
                    feedback.style.color = feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--error-color').trim();

                }
                if (currentQuestion < questions.length - 1) {
                    document.getElementById('nextButton').style.display = 'inline-block';
                } else {
                    endQuiz();
                }
            } else {
                showAlert();
            }
        }

        function showAlert() {
            document.getElementById('customAlert').style.display = 'block';
            document.getElementById('overlay').style.display = 'block';
        }

        function closeAlert() {
            document.getElementById('customAlert').style.display = 'none';
            document.getElementById('overlay').style.display = 'none';
        }

        function nextQuestion() {
            currentQuestion++;
            if (currentQuestion < questions.length) {
                displayQuestion();
            } else {
                endQuiz();
            }
        }

        function endQuiz() {
            updateProgressBar(); // Ensure the progress bar is full
            const questionContainer = document.getElementById('questionContainer');
            questionContainer.innerHTML = `<h2>סיימת את המשחק!</h2><p>הציון שלך: ${score} מתוך ${questions.length}</p><button onclick="startQuiz()">התחל משחק חדש</button>`;
             
            document.getElementById('nextButton').style.display = 'none';
            document.getElementById('feedback').style.display = 'none'; // Hide feedback on the last question
        }   