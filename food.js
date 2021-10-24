import {isSnakeOnFood,expandSnake} from './snake.js'
import {randomGridPosition} from './grid.js'

export let food = getRandomLoc()

export function update() {
    if(isSnakeOnFood(food)){
        food = getRandomLoc()
    } 

}
export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}


function getRandomLoc() {
    let randomFoodLoc 
    randomFoodLoc = randomGridPosition()
    return randomFoodLoc 
}
