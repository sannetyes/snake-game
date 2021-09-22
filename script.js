let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")

let snake = [ {x:40, y:200},
              {x:30, y:200},
              {x:20, y:200},
              {x:10, y:200},
              {x:0, y:200}
]
function drawSnakePixel(pixel){
    ctx.fillStyle = "green"
    ctx.strokeStyle = "black"
    ctx.fillRect(pixel.x, pixel.y, 10, 10)
    ctx.strokeRect(pixel.x,pixel.y,10,10)
}
function drawSnake(){
    snake.forEach(drawSnakePixel)
}
let up = false
let down = false
let right = true
let left = false
window.addEventListener('keydown', e => {
    switch (e.key) {
      case 'ArrowUp':
        if(down) break
        up = true
        down=right=left=false
        break
      case 'ArrowDown':
        if (up) break
        down = true
        up=right=left=false
        break
      case 'ArrowLeft':
        if (right) break
        left = true
        up=down=right=false
        break
      case 'ArrowRight':
        if (left) break
        right = true
        up=down=left=false
        break
    }
  })
function actionSnake(){
    setTimeout(() => {
        if (up && !down){
            snake.unshift({x:snake[0].x ,y: snake[0].y - 10})
            down = false
        }
        else if (down && !up){
            snake.unshift({x:snake[0].x , y:snake[0].y + 10})
            up = false
        }
        else if(right){
            snake.unshift({x:snake[0].x + 10, y:snake[0].y})
            left = false 
        }
        else if (left){
            snake.unshift({x:(snake[0].x - 10), y:snake[0].y})
            right = false
        }
        console.log(snake)
        ctx.fillStyle = "#fff"
        ctx.fillRect(0,0,canvas.clientWidth,canvas.clientHeight)
        drawSnake()
        if( snake[0].x < 400 && snake[0].y < 400){
            snake.pop()
            actionSnake()
        }
    },500)
}
function main() {
    actionSnake()
}
main()