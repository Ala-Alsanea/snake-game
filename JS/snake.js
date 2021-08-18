import { getInputDir, reset as inputReset } from "./input.js"

export let snakeSpeed = 10
export let snakeBody = [{ x: 15, y: 15 }]
let newSeg = 0
export let expandRate = 3
export let snakeElement
export var score = 0
export let scoreElement = document.getElementById("score")
export let inputDir



export function update() {

    addSeg()
    inputDir = getInputDir()
        // console.log(snakeBody[0].y += inputDir.y)

    for (let i = snakeBody.length - 2; i >= 0; i--)
        snakeBody[i + 1] = {...snakeBody[i] }

    snakeBody[0].x += inputDir.x
    snakeBody[0].y += inputDir.y

}


export function draw(area) {
    snakeBody.forEach(seg => {
        snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = seg.y
        snakeElement.style.gridColumnStart = seg.x
        snakeElement.classList.add('snake')

        area.appendChild(snakeElement)

    })

    // console.dir(snakeBody)



}


// #############################################################################################

export function expandSnake(num) {
    newSeg += num
}

export function onSnake(pos, { ignoreHead = false } = {}) {
    return snakeBody.some((seg, index) => {
        if (ignoreHead && index === 0) return false
            // console.log(index)
        return equalPos(seg, pos)
    })
}


export function equalPos(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSeg() {

    for (let i = 0; i < newSeg - 1; i++)
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

export function reset() {

    inputReset()
    snakeBody = [{ x: 15, y: 15 }]
    snakeElement.classList.remove("hidden")
    score = 0


}


export function change(level) {
    switch (level.innerHTML) {
        case 'easy':
            snakeSpeed = 10
            expandRate = 3
            break

        case 'normal':
            snakeSpeed = 13
            expandRate = 4
            break

        case 'hard':
            snakeSpeed = 14
            expandRate = 5
            break

        case 'very hard':
            snakeSpeed = 12
            expandRate = 6
            break
    }
}