let inputDir = { x: 0, y: 0 }
let lastInput = { x: 0, y: 0 }

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
        case 'w':
            if (lastInput.y !== 0) break
            inputDir = { x: 0, y: -1 }
            break
        case 'ArrowDown':
        case 's':
            if (lastInput.y !== 0) break
            inputDir = { x: 0, y: 1 }
            break
        case 'ArrowLeft':
        case 'a':
            if (lastInput.x !== 0) break
            inputDir = { x: -1, y: 0 }
            break
        case 'ArrowRight':
        case 'd':
            if (lastInput.x !== 0) break
            inputDir = { x: 1, y: 0 }
            break
    }
})


export function getInputDir() {
    lastInput = inputDir
    return inputDir
}

export function reset() {

    inputDir = { x: 0, y: 0 }
    lastInput = { x: 0, y: 0 }



}