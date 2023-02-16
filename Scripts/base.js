// ! Global Verps.
let _ = {}

_["title"] = ""


// ! No canvas??. I got you
_.canvas = document.createElement("canvas")
_.ctx = _.canvas.getContext("2d")
document.querySelector("body").appendChild(_.canvas)

// ! Making it look good
_.canvas.width = innerWidth
_.canvas.height = innerHeight

document.querySelector("body").style.margin = 0
document.querySelector("body").style.padding = 0
document.querySelector("body").style.overflow = "hidden"

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

// ! Custom functions?. Not a big deal bud
function NewEvent(type, callback) {
    addEventListener(type, callback)
}

// ! Create for some sore of thing, I guss?
let title = document.createElement("title")

// ! Setting up functions and make them work
onload = () => {
    Start()
 
    const Loop =  () => {
        requestAnimationFrame(Loop)
        Update()


        // ! Setting up things
        title.textContent = _["title"]

        document.querySelector("head").appendChild(title)
    }
    Loop()
}