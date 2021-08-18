import { equalPos, getSnakeHead } from './snake.js'
import { getRandomPos } from './food.js'

let object = [getRandomPos()]
let objElement
export let objNum = 7

export function update() {

    addObj(objNum)




}

export function draw(area) {
    object.forEach(seg => {
        objElement = document.createElement('div')
        objElement.style.gridRowStart = seg.y
        objElement.style.gridColumnStart = seg.x
        objElement.classList.add('object')

        area.appendChild(objElement)

    })



}

// #############################################################################################



export function snakeOnObject() {

    for (let i = 0; i < object.length; i++) {
        if (equalPos(object[i], getSnakeHead())) {

            return true
        }
    }


}


function addObj(num) {

    for (let i = 1; i < num - 1; i++) {
        object[object.length] = {...object[object.length] }

        getObjPos()
    }
    objNum = 0

}

export function getObjPos() {
    for (let i = 0; i < object.length; i++)
        object[i] = getRandomPos()
}

export function reset() {
    getObjPos()

}

export function onObject(pos) {

    for (let i = 0; i < object.length; i++) {
        if (equalPos(object[i], pos))
            return true
    }
    return false
}

export function change(level) {
    switch (level.innerHTML) {
        case 'easy':
            object = [getRandomPos()]
            objNum = 7
            getObjPos()
            break

        case 'normal':
            object = [getRandomPos()]
            objNum = 12
            getObjPos()
            break

        case 'hard':
            object = [getRandomPos()]
            objNum = 15
            getObjPos()
            break

        case 'very hard':
            object = [getRandomPos()]
            objNum = 22
            getObjPos()
            break
    }
}