import {draw as drawSnake,update as updateSnake,SNAKE_SPEED, checkSnakeCrush} from './snake.js'
import {update as updateFood, draw as drawFood} from './food.js'                 

/* let startGame = true
 */
let gameBoard = document.getElementById('game-board')
// currentTime in in millliseconds
let lastRenderTime = 0
    function main(currentTime){
    if(gameOver){
        alert("GAME OVER!!!")
    }
    window.requestAnimationFrame(main)
    let secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return
    lastRenderTime = currentTime
    draw()
    update()
}

window.requestAnimationFrame(main)
/* if(startGame === true){
    window.requestAnimationFrame(main)
}
window.addEventListener('keydown', (e) => {
    if(e.key === 'Space'){   
        return startGame = true
}})
 */ 

function update() { 
    updateSnake() 
    updateFood()    

}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)

}
function gameOver() {
    if(checkSnakeCrush){
        return true 
    }
    else return false
}


