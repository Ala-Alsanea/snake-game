import { update as updateSnake, draw as drawSnake, snakeSpeed, snakeOnSnake, getSnakeHead, outOfArea, onSnake, scoreElement, reset as snakeReset, snakeElement, inputDir } from './snake.js'
import { update as updateFood, draw as drawFood, reset as foodReset } from './food.js'
import { reset as inputReset } from './input.js'


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
        inputReset()
        snakeReset()

        song2.play()


        // inputDir = { x: 0, y: 0 }
        btn.onclick = function() {
            // window.location = '/'
            reset()


        }

        // gameOver = false
        // return
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


function reset() {
    song2.pause()
    gameOver = false
    alert.classList.add("hidden")
    foodReset()




}