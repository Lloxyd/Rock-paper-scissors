    var you;
    var yourScore = 0;
    var opponent;
    var opponentScore = 0;

    var choices = ["Rock", "Paper", "Scissors"];

    window.onload = function() {
        for(let i = 0; i < 3; i++) {
            let choice = document.createElement("img");
            choice.id = choices[i];
            choice.src = choices[i] + ".png";
            choice.addEventListener("click", selectChoice);
            document.getElementById("choices").append(choice);
        }

        function selectChoice() {
            you = this.id;
            document.getElementById("your-choice").src = you + ".png";

            // random opponent
            opponent = choices[Math.floor(Math.random() * 3)];
            document.getElementById("opponent-choice").src = opponent + ".png";

          
    if (you === opponent) {
        // It's a tie
        yourScore += 1;
        opponentScore += 1;
    } else if (
        (you === "Rock" && opponent === "Scissors") ||
        (you === "Scissors" && opponent === "Paper") ||
        (you === "Paper" && opponent === "Rock")
    ) {
        // You win
        yourScore += 1;
    } else {
        // Opponent wins
        opponentScore += 1;
    }

    document.getElementById("your-score").innerText = yourScore;
    document.getElementById("opponent-score").innerText = opponentScore;

        }
    
    }
