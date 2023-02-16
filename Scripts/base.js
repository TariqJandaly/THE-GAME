// ! Global Verps.
let _ = {}

_.canvas = document.createElement("canvas")
_.ctx = _.canvas.getContext("2d")

// ! Setting up Start functions.
let _Start = {}
const Start = () => {
    for (let x in _Start) {
        _Start[x]()
    }
}

// ! Setting up Update functions.
let _Update = {}
const Update = () => {
    for (let x in _Update) {
        _Update[x]()
    }
}

// ! Setting up functions and make them work
onload = () => {
    Start()
 
    const Loop =  () => {
        requestAnimationFrame(Loop)
        Update()
    }
    Loop()
}