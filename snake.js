import { food } from "./food.js"
import { getInputDirection } from "./input.js"
export let SNAKE_SPEED = 5
let snakeBody = [
    { x: 11, y: 11},
    { x: 12, y: 11},
    { x: 13, y: 11},
    { x: 14, y: 11}
]

export function update() {
    checkSnakeCrush()
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = {...snakeBody[i]}
    }
    snakeBody[0].x += getInputDirection().x
    snakeBody[0].y += getInputDirection().y
    if(isSnakeOnFood(food)){
        expandSnake()
    }
}

export function draw(gameBoard) {
    snakeBody.forEach(pixel => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = pixel.y
        snakeElement.style.gridColumnStart = pixel.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}
export function isSnakeOnFood(FOOD) {
    if (snakeBody[0].x === FOOD.x && snakeBody[0].y === FOOD.y )return true
}
export function expandSnake() {
    snakeBody.push({...snakeBody[snakeBody.length - 1]})
}
export function checkSnakeCrush(){
    let newSnakeBody = snakeBody.filter(snakeElement => snakeBody.indexOf(snakeElement) > 3)
    newSnakeBody.forEach(segment => {
        if(segment === snakeBody[0]){
            return true
        }
        else return true
    })
}