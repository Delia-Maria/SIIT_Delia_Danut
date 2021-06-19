var gameChoice = ["rock", "paper", "scissors"];
var userScore = 0;
var buttonsElem = document.getElementById("buttons");
const scoreElement = buttonsElem.appendChild(document.createElement("p"));


function addEventForUser(butonParam) {
    var btn = document.getElementById("btn-" + butonParam); //selectam butoanele pe rand in functie de cel care a fost apasat de user
    btn.addEventListener("click", function() {
        var randomChoiceIndex = Math.floor(Math.random() * 3); //generam random un nr intreg pana la 3
        var pcChoice = gameChoice[randomChoiceIndex]; //selectam nr generat
        console.log("Pc Choice: " + pcChoice);
        console.log("User Choice: " + butonParam);
        console.log(getResult(pcChoice, butonParam)); //apelam functia getResult

        if (getResult == pcChoice) {
            scoreElement.innerText = "PC won!";
        } else if (getResult != pcChoice) {
            scoreElement.innerText = "User won!";
        } else {
            scoreElement.innerText = "Both won!";
        }
    });

}

const btnStart = document.getElementById("start");
btnStart.addEventListener("click", function() {
    addEventForUser("paper");
    addEventForUser("scissors");
    addEventForUser("rock");

});

function getResult(pcChoice, userChoice) {
    switch (userChoice) {
        case "rock":
            switch (pcChoice) {
                case "rock":
                    return "Win win";
                case "paper":
                    return "Win pc";
                case "scissors":
                    return "win user";
                default:
            }
            break;
        case "paper":
            switch (pcChoice) {
                case "rock":
                    return "Win user";
                case "paper":
                    return "Win win";
                case "scissors":
                    return "Win pc";
                default:
            }
            break;
        case "scissors":
            switch (pcChoice) {
                case "rock":
                    return "Win pc";
                case "paper":
                    return "Win user";
                case "scissors":
                    return "Win win";
                default:
            }
            break;
        default:
            break;
    }
}