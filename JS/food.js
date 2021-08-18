import { expandSnake, onSnake, expandRate } from "./snake.js"
import { getObjPos, onObject } from './object.js'

export let food = getRandomPos()

let foodElement



export function update() {
    if (onSnake(food)) {
        expandSnake(expandRate)
        food = getRandomPos()
        getObjPos()
    }
    if (onObject(food)) {
        getObjPos()
    }

}


export function draw(area) {

    foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    area.appendChild(foodElement)
}


// #############################################################################################

export function getRandomPos() {
    let newPos
    while (newPos == null || onSnake(newPos)) {
        newPos = {
            x: Math.floor(Math.random() * 30) + 1,
            y: Math.floor(Math.random() * 30) + 1
        }
    }

    return newPos
}


export function reset() {

    food = getRandomPos()




}