let row = 0;
let col = 0;
const guesses = 6;
const maxLetter = 5;
let gameOver = false;
let word = ["LICKS", "CLICK", "MAKES", "LAKES", "BAKES", "WORDS", "NERDS", "TURDS"];
acutalWord = word[(Math.floor(Math.random() * word.length))];

const helpButton = document.getElementById("iconHelp");
const brightIcon = document.getElementById("iconBright");
const exitIcon = document.getElementById("iconX");
const information = document.getElementById("infos");
const title = document.getElementById("title2");
const finalAnswer = document.getElementById("answer");
const alerts = document.getElementById("alert");
const again = document.getElementById("again");
const firstBox = document.getElementById("firstBox");
const secondBox = document.getElementById("secondBox");
const thirdBox = document.getElementById("thirdBox");
const body = document.querySelector("body");



window.onload = function(){
    gameStart();
}

again.addEventListener("click", function() {
    window.location.reload();
});


function gameStart() {
    document.addEventListener("keyup", (e) => {
        if (gameOver) return;
        let currentTile = document.getElementById(row.toString() + '-' + col.toString());                
        if ("KeyA" <= e.code && e.code <= "KeyZ") {

            if (col < maxLetter) {
                if (currentTile.innerText == "") {
                    currentTile.innerText = e.code[3]
                    col++;
                }
            }
        } else if (e.code == "Backspace") {
            if(0 < col && col <= maxLetter) {
                col -=1;
            }
            let currentTile = document.getElementById(row.toString() + '-' + col.toString());                
            currentTile.innerHTML = "";
        } else if (e.code == "Enter") {
            if(col == maxLetter) {
                update();
                row++;
                col = 0;
                alerts.hidden = true;
            } else {
                alerts.hidden = false;
            }
            
        }

        if (!gameOver && row == guesses) {
            finalAnswer.innerHTML = `Word: ${acutalWord}`;
            finalAnswer.hidden = false;
            again.hidden = false;
            gameOver = true;
        }
    })

    helpButton.addEventListener("click", function() {
        if (information.hidden == true) {
            information.hidden = false;
        } else if (information.hidden == false){
            information.hidden = true;
        }
    });

    exitIcon.addEventListener("click", function() {
        information.hidden = true;
    });

    brightIcon.addEventListener("click", function() {
        if (body.style.background == "white") {
            body.style.background = "black";
            helpButton.style.color = "white";
            brightIcon.style.color = "white";
            information.style.backgroundColor = "black";
            information.style.boxShadow = "0px 0px 20px 10px white";
            title.style.color = "chartreuse";
            firstBox.style.color = "white";
            secondBox.style.color = "white";
            thirdBox.style.color = "white";
            for (let i = 0; i <= 4; i++) {
                for (let j = 0; j <= 5; j++) {
                    let currentTile = document.getElementById(j.toString() + '-' + i.toString());      
                    currentTile.style.color = "white";          
                }
            }
          } else if (body.style.background = "black") {
            body.style.background = "white";
            helpButton.style.color = "black";
            brightIcon.style.color = "black";
            information.style.backgroundColor = "gray";
            information.style.boxShadow = "0px 0px 20px 10px black";
            title.style.color = "green";
            firstBox.style.color = "black";
            secondBox.style.color = "black";
            thirdBox.style.color = "black";
            for (let i = 0; i <= 4; i++) {
                for (let j = 0; j <= 5; j++) {
                    let currentTile = document.getElementById(j.toString() + '-' + i.toString());      
                    currentTile.style.color = "black";          
                }
            }
          }
    });
    
}

function update() {
    let correct = 0;
    for (let i = 0; i < maxLetter; i++) {
        let currentTile = document.getElementById(row.toString() + '-' + i.toString());        
        let letter = currentTile.innerText;
        let alpha = document.getElementById("Key" + letter);//////////
        if (acutalWord[i] == letter) {
            currentTile.classList.add("mainGreenTile");
            alpha.classList.add("aplahGreenTile")
            correct++;
        } else if (acutalWord.includes(letter)) {
            currentTile.classList.add("mainYellowTile");
            alpha.classList.add("alphaYellowTile")
        } else {
            currentTile.classList.add("mainGrayTile");
            alpha.classList.add("alphaGrayTile")
        }

        if (correct == maxLetter) {
            finalAnswer.innerHTML = `Word: ${acutalWord}`;
            finalAnswer.hidden = false;
            again.hidden = false;
            gameOver = true;
        }
    }
}

