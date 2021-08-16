import { expandSnake, onSnake } from "./snake.js"

export let food = getRandomPos()
let expandRate = 3
let foodElement



export function update() {
    if (onSnake(food)) {
        expandSnake(expandRate)
        food = getRandomPos()
    }


}


// ###############################

export function draw(area) {

    foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    area.appendChild(foodElement)
}


export function getRandomPos() {
    let newFoodPos
    while (newFoodPos == null || onSnake(newFoodPos)) {
        newFoodPos = {
            x: Math.floor(Math.random() * 30) + 1,
            y: Math.floor(Math.random() * 30) + 1
        }
    }

    return newFoodPos
}


export function reset() {

    food = getRandomPos()
    console.dir(food)



}