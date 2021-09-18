var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

let snake = [ {x:40, y:200},
              {x:30, y:200},
              {x:20, y:200},
              {x:10, y:200},
              {x:0, y:200}
]
var i = 0
function drawSnakePixel(pixel){
    ctx.fillStyle = "green"
    ctx.strokeStyle = "black"
    ctx.fillRect(pixel.x, pixel.y, 10, 10)
    ctx.strokeRect(pixel.x,pixel.y,10,10)
}
function clearSnakePixel(){
    ctx.fillStyle = "white"
    ctx.strokeStyle = "white"
    ctx.fillRect(snake[0].x -10, snake.y, 10, 10)
    ctx.strokeRect(snake[0].x -10,snake.y,10,10)
}
function drawSnake(){
    snake.forEach(drawSnakePixel)
}
function actionSnake(){
    setTimeout(() => {
            snake.pop()
            snake.unshift({x:(snake[0].x + 10), y:200})
            console.log(snake)
            drawSnake()
            if( i <(canvas.clientWidth) / 10 ){
                actionSnake()
            }
    },2000)
}
function main(){
    actionSnake()
}