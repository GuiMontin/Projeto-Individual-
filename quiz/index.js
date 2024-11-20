const $startGameButton = document.querySelector(".start-quiz");
const $questionContainer = document.querySelector(".question-container");
const $answersContainer = document.querySelector(".answers-container");
const $questionText = document.querySelector(".question");
const $nextQuestionButton = document.querySelector(".next-question");

$startGameButton.addEventListener("click", startGame);
$nextQuestionButton.addEventListener("click", displayNextQuestion);

let currentQuestionIndex = 0; // Variável auxiliar
let totalCorreto = 0;

function startGame() {
    $startGameButton.classList.add("hide");
    $questionContainer.classList.remove("hide");
    displayNextQuestion();
}

function displayNextQuestion() {
    resetState();

    if (questions.length === currentQuestionIndex) {
        return finishGame();
    }

    $questionText.textContent = questions[currentQuestionIndex].question;
    questions[currentQuestionIndex].answer.forEach(answer => {
        const newAnswer = document.createElement("button");
        newAnswer.classList.add("button", "answer");
        newAnswer.textContent = answer.text;
        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct;
        }
        $answersContainer.appendChild(newAnswer);

        newAnswer.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    while ($answersContainer.firstChild) {
        $answersContainer.removeChild($answersContainer.firstChild);
    }

    document.body.removeAttribute("class");
    $nextQuestionButton.classList.add("hide");
}

// Botão que o usuário clicou: resposta dele
function selectAnswer(event) {
    const answerClicked = event.target;

    if (answerClicked.dataset.correct) {
        document.body.classList.add("correct");
        totalCorreto++;
    } else {
        document.body.classList.add("incorrect");
    }

    document.querySelectorAll(".answer").forEach(button => {
        if (button.dataset.correct) {
            button.classList.add("correct");
        } else {
            button.classList.add("incorrect");
        }

        button.disabled = true;
    });

    $nextQuestionButton.classList.remove("hide");
    currentQuestionIndex++;
}

function finishGame() {
    const totalQuestion = questions.length;
    const perfomance = Math.floor((totalCorreto * 100) / totalQuestion);

    let msg = "";

    switch (true) {
        case perfomance >= 90:
            msg = "Excelente jogador, Nível Elite";
            break;
        case perfomance >= 70:
            msg = "Muito bom jogador, Nível Premium ";
            break;
        case perfomance >= 50:
            msg = "Boa jogador, Nível Diamante ";
            break;
        case perfomance >= 30:
            msg = "Opa jogador, Nível Platina ";
            break;
        default:
            msg = "Vamos melhorar jogador, Nível Bronze ";
    }

    $questionContainer.innerHTML = `
        <p>Você acertou ${totalCorreto} de ${totalQuestion} questões</p>
        <span>Resultado: ${msg}</span>
        <button class="restart-button">Refazer teste</button>
    `;

    document.querySelector(".restart-button").addEventListener("click", restartGame);
}

function restartGame() {
    currentQuestionIndex = 0;
    totalCorreto = 0;
    $questionContainer.innerHTML = ""; // Limpa o conteúdo
    $questionContainer.classList.add("hide");
    $startGameButton.classList.remove("hide");
}


const questions = [
    // Perguntas de nível médio a difícil
    {
        question: "Quantos jogadores compõem um time de futebol americano em campo?",
        answer: [
            { text: "10", correct: false },
            { text: "11", correct: true },
            { text: "12", correct: false },
            { text: "13", correct: false }
        ]
    },
    {
        question: "Quantos pontos um arremesso de longa distância vale no basquete?",
        answer: [
            { text: "2", correct: false },
            { text: "3", correct: true },
            { text: "4", correct: false },
            { text: "1", correct: false }
        ]
    },
     {
         question: "Qual é a única equipe que venceu todas as partidas em uma temporada da NBA?",
         answer: [
             { text: "Los Angeles Lakers", correct: false },
             { text: "Chicago Bulls", correct: false },
             { text: "Golden State Warriors", correct: true },
             { text: "Boston Celtics", correct: false }
         ]
     },
     {
         question: "Quem foi o jogador mais jovem a vencer a Fórmula 1?",
         answer: [
             { text: "Lewis Hamilton", correct: false },
             { text: "Michael Schumacher", correct: false },
             { text: "Sebastian Vettel", correct: true },
             { text: "Max Verstappen", correct: false }
         ]
     },
     {
         question: "Qual país sediou a primeira Copa do Mundo de futebol em 1930?",
         answer: [
             { text: "Brasil", correct: false },
             { text: "Uruguai", correct: true },
             { text: "Argentina", correct: false },
             { text: "Alemanha", correct: false }
         ]
     },
     {
         question: "Qual jogador de basquete detém o recorde de mais pontos marcados em uma única partida da NBA?",
         answer: [
             { text: "Michael Jordan", correct: false },
             { text: "Wilt Chamberlain", correct: true },
             { text: "LeBron James", correct: false },
             { text: "Kobe Bryant", correct: false }
         ]
     },
     {
         question: "Em que ano foi introduzido o Safety Car na Fórmula 1?",
         answer: [
             { text: "1973", correct: false },
             { text: "1993", correct: true },
             { text: "1988", correct: false },
             { text: "2000", correct: false }
         ]
     },
        //   Perguntas muito difíceis
     {
         question: "Qual jogador marcou o gol mais rápido em uma Copa do Mundo?",
         answer: [
             { text: "Pele", correct: false },
             { text: "Clint Dempsey", correct: false },
             { text: "Hakan Şükür", correct: true },
             { text: "Cristiano Ronaldo", correct: false }
         ]
     },
     {
         question: "Quem foi o piloto mais velho a vencer um Grande Prêmio de Fórmula 1?",
         answer: [
             { text: "Alain Prost", correct: false },
             { text: "Juan Manuel Fangio", correct: true },
             { text: "Niki Lauda", correct: false },
             { text: "Fernando Alonso", correct: false }
         ]
     },
    {
        question: "Quantos títulos mundiais o jogador de basquete Bill Russell conquistou na NBA?",
        answer: [
            { text: "10", correct: false },
            { text: "11", correct: true },
            { text: "9", correct: false },
            { text: "12", correct: false }
        ]
    }
];

