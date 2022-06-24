
let player1Mark = "X"
let player2Mark = 'O'
let turnCounter = 0

const gameBoard = document.querySelector('.game-board')

const takesTurn = (event) => {
    
    if (event.target.dataset.player1 === "1"|| event.target.dataset.player2 === "1" || checksForWinner() === true) {return}

    else {if (turnCounter % 2 === 0){
            event.target.querySelector('p').innerText = player1Mark
            event.target.dataset.player1 = 1
            turnCounter ++
            document.querySelector('.side-panel-left').style.color = "white";
            document.querySelector('.side-panel-right').style.color = "red";

        } else {
            event.target.querySelector('p').innerText = player2Mark
            event.target.dataset.player2 = 1
            turnCounter ++
            document.querySelector('.side-panel-left').style.color = "red";
            document.querySelector('.side-panel-right').style.color = "white";

        }
        
        checksForWinner()
        if (turnCounter === 9 && checksForWinner() === false){alert("It's a draw!")}

    }
}


//CHECKS FOR WINNER

const row0 = document.querySelectorAll(".r0")
const row1 = document.querySelectorAll(".r1")
const row2 = document.querySelectorAll(".r2")
const column0 = document.querySelectorAll(".c0")
const column1 = document.querySelectorAll(".c1")
const column2 = document.querySelectorAll(".c2")
const diag0 = document.querySelectorAll(".diag0")
const diag1 = document.querySelectorAll(".diag1")

const winDirections = [row0, row1, row2, column0, column1, column2, diag0, diag1]

const checksForWinner = () => {
    for (let i = 0; i < winDirections.length; i++ ){

        let directionTotalPlayer1 = 0
        let directionTotalPlayer2 = 0

        for (let j = 0; j < winDirections[i].length; j++){

            directionTotalPlayer1 += parseInt(winDirections[i][j].dataset.player1)
            directionTotalPlayer2 += parseInt(winDirections[i][j].dataset.player2)

            if (directionTotalPlayer1 === 3){
    
                alert('Player 1 won!')
                document.querySelector('.side-panel-left').style.color = "white";
                document.querySelector('.side-panel-right').style.color = "white";
                return true
                
            }
            else if (directionTotalPlayer2 === 3){
    
                alert('Player 2 won!')
                document.querySelector('.side-panel-left').style.color = "white";
                document.querySelector('.side-panel-right').style.color = "white";
                return true
            }
        }

    }
    return false
}

gameBoard.addEventListener('click', takesTurn)


//RESET GAME BUTTON

const resetGameButton = document.querySelector('#reset-game-button')

const resetGame = () => {
    
    turnCounter = 0

    let squares = gameBoard.querySelectorAll('div')

    for (let i = 0; i < squares.length; i++){
        squares[i].dataset.player1 = "0"
        squares[i].dataset.player2 = "0"
    }

    let squaresText = gameBoard.querySelectorAll('p')

    for (let i = 0; i < squaresText.length; i++){
        squaresText[i].innerText = ""
    }

    document.querySelector('.side-panel-left').style.color = "red";
    document.querySelector('.side-panel-right').style.color = "white";


}

resetGameButton.addEventListener('click',resetGame)


//EMOJI BUTTON

const emojiButton = document.querySelector('#emoji-button')

let emojiOptions = [["🐶", "🐱"], ["😇", "😈"], ["🤠", "🤡"], ["💩", "🍦"]]

const indicatePlayer1Mark = document.querySelector('#indicate-player-1-mark')
const indicatePlayer2Mark = document.querySelector('#indicate-player-2-mark')

const emojiMarks = () => {
    
    let randomEmojiPair = emojiOptions[Math.floor(Math.random() * emojiOptions.length)]

    player1Mark = randomEmojiPair[0]
    player2Mark = randomEmojiPair[1]

    indicatePlayer1Mark.innerText = randomEmojiPair[0]
    indicatePlayer2Mark.innerText = randomEmojiPair[1]

}

emojiButton.addEventListener('click', emojiMarks)