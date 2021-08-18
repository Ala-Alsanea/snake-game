// 

import { change as snakeChange } from "./snake.js"
import { change as objectChange } from "./object.js"
import { reset } from './control.js';

let easy = document.getElementById('easy')
let normal = document.getElementById('normal')
let hard = document.getElementById('hard')
let very_hard = document.getElementById('very-hard')
let levelLabel = document.getElementById("levelLabel")
let levelLabel_2 = document.getElementById("levelLabel-2")


export function checkLevel() {

    easy.onclick = function() {
        snakeChange(easy)
        objectChange(easy)
        levelLabel.innerHTML = easy.innerHTML
        levelLabel_2.innerHTML = easy.innerHTML
        reset()
    }

    normal.onclick = function() {
        snakeChange(normal)
        objectChange(normal)
        levelLabel.innerHTML = normal.innerHTML
        levelLabel_2.innerHTML = normal.innerHTML
        reset()
    }

    hard.onclick = function() {
        snakeChange(hard)
        objectChange(hard)
        levelLabel.innerHTML = hard.innerHTML
        levelLabel_2.innerHTML = hard.innerHTML
        reset()
    }

    very_hard.onclick = function() {
        snakeChange(very_hard)
        objectChange(very_hard)
        levelLabel.innerHTML = very_hard.innerHTML
        levelLabel_2.innerHTML = very_hard.innerHTML
        reset()
    }


}