import { getInputDir } from "./input.js"

export const snakeSpeed = 10
let snakeBody = [{ x: 15, y: 15 }]
let newSeg = 0
let score = 0
export let scoreElement = document.getElementById("score")



// #####################################
export function update() {

    addSeg()
    let inputDir = getInputDir()
        // console.log(snakeBody[0].y += inputDir.y)

    for (let i = snakeBody.length - 2; i >= 0; i--)
        snakeBody[i + 1] = {...snakeBody[i] }

    snakeBody[0].x += inputDir.x
    snakeBody[0].y += inputDir.y

}
// ###############################

export function draw(area) {
    snakeBody.forEach(seg => {
        let snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = seg.y
        snakeElement.style.gridColumnStart = seg.x
        snakeElement.classList.add('snake')

        area.appendChild(snakeElement)

    })





}


export function expandSnake(num) {
    newSeg += num
        // console.log(newSeg)

    // console.log(score)

}

export function onSnake(pos, { ignoreHead = false } = {}) {
    return snakeBody.some((seg, index) => {
        if (ignoreHead && index === 0) return false
            // console.log(index)
        return equalPos(seg, pos)
    })
}

function equalPos(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSeg() {

    for (let i = 0; i < newSeg; i++)
        snakeBody[snakeBody.length] = {...snakeBody[snakeBody.length] }

    score += newSeg
    newSeg = 0
    scoreElement.innerHTML = score

}

export function outOfArea(pos) {
    return (
        pos.x < 1 || pos.x > 30 ||
        pos.y < 1 || pos.y > 30
    )
}

export function getSnakeHead() {
    return snakeBody[0]
}

export function snakeOnSnake() {
    return onSnake(snakeBody[0], { ignoreHead: true })
}