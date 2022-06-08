export class UI {
    constructor() {}
    showQuestion(text) {
        const questionTitle = document.getElementById("question")
        questionTitle.innerText = text;

    }

    showChoices(choices, callback) {
        const choicesContainer = document.getElementById("choices");
        const arrayChoices = choices[0];

        choicesContainer.innerHTML = "";
        for (let i = 0; i < arrayChoices.length; i++) {




            const button = document.createElement("button");
            button.addEventListener('click', () => callback(choices[i]));
            button.innerText = arrayChoices[i];
            button.className = 'button'

            choicesContainer.append(button);


        }
    }

    showScores(score) {
        const quizEndHtml = `
          <h1>Resultado</h1>
          <h2 id="score">Tu Puntaje es: ${score}</h2>
          `;
        const element = document.getElementById("quiz");
        element.innerHTML = quizEndHtml;
    }

    showProgress(currentIndex, total) {
        const element = document.getElementById("progress");
        element.innerHTML = `Question ${currentIndex} of ${total}`;
    }
}