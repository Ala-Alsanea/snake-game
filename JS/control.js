import { update as updateSnake, draw as drawSnake, snakeSpeed, snakeOnSnake, getSnakeHead, outOfArea, onSnake, scoreElement } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'


let lastRend = 0
let area = document.getElementById("area")
let gameOver = false
let alert = document.getElementById("alert")
let scoreSpan = document.getElementById("scoreSpan")
let btn = document.getElementById('btn')
let song2 = document.getElementById("song2")
    // let song1 = document.getElementById("song1")


function main(rightNow) {
    if (gameOver) {
        // window.alert('u losssse')
        // window.location = '/'
        alert.classList.remove("hidden")
        scoreSpan.innerHTML = scoreElement.innerHTML

        song2.play()
        btn.onclick = function() {
            window.location = '/'
        }
        return
    }



    window.requestAnimationFrame(main)
    const secSinceLastRend = (rightNow - lastRend) / 1000
    if (secSinceLastRend < 1 / snakeSpeed) return

    lastRend = rightNow
        // console.log("run")

    update()
    draw()

}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()

}

function draw() {
    area.innerHTML = ''
    drawSnake(area)
    drawFood(area)
}


function checkDeath() {
    gameOver = outOfArea(getSnakeHead()) || snakeOnSnake()
}