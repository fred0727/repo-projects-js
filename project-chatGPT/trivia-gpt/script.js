let currentQuestion = 0;
		let score = 0;

		const quizQuestions = [
			{
				question: "What is the capital of France?",
				options: ["Paris", "Berlin", "London", "Madrid"],
				answer: "Paris"
			},
			{
				question: "What is the largest planet in our solar system?",
				options: ["Mars", "Jupiter", "Venus", "Saturn"],
				answer: "Jupiter"
			},
			{
				 question: "Who was the first person to walk on the moon?",
				 options: ["Buzz Aldrin", "Neil Armstrong", "Michael Collins", "Yuri Gagarin"],
				 answer: "Neil Armstrong"
			}
		];

		const questionElement = document.getElementById("question");
		const option1Element = document.getElementById("option1");
		const option2Element = document.getElementById("option2");
		const option3Element = document.getElementById("option3");
		const option4Element = document.getElementById("option4");
		const radio1Element = document.getElementById("radio1");
		const radio2Element = document.getElementById("radio2");
		const radio3Element = document.getElementById("radio3");
		const radio4Element = document.getElementById("radio4");
		const quizForm = document.getElementById("quiz-form");

		function displayQuestion() {
			questionElement.innerHTML = quizQuestions[currentQuestion].question;
			option1Element.innerHTML = quizQuestions[currentQuestion].options[0];
			option2Element.innerHTML = quizQuestions[currentQuestion].options[1];
			option3Element.innerHTML = quizQuestions[currentQuestion].options[2];
			option4Element.innerHTML = quizQuestions[currentQuestion].options[3];

            // Actualizar los valores de los atributos 'value' de los elementos 'input'
            radio1Element.value = quizQuestions[currentQuestion].options[0];
            radio2Element.value = quizQuestions[currentQuestion].options[1];
            radio3Element.value = quizQuestions[currentQuestion].options[2];
            radio4Element.value = quizQuestions[currentQuestion].options[3];
		}

		function checkAnswer() {
            const selectedAnswer = document.querySelector('input[name="answer"]:checked');
			if (selectedAnswer !== null) {
                document.getElementById('message').innerText = ""
				if (selectedAnswer.value === quizQuestions[currentQuestion].answer) {
					score++;
				}
			}else{
                document.getElementById('message').innerText = "Seleccione una opción valida"
                checkAnswer();
            }
		}

		function nextQuestion() {
			currentQuestion++;
			if (currentQuestion < quizQuestions.length) {
				displayQuestion();
			} else {
				alert(`Quiz completed! Your score is ${score} out of ${quizQuestions.length}.`);
			}
		}

		displayQuestion();

		quizForm.addEventListener("submit", function(event) {
			event.preventDefault();
			checkAnswer();
			nextQuestion();
		});