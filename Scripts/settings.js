let Start = () => { }

let Update = () => { }

let FrameUpdate = () => { }

setTimeout(() => {
    (function() {
        Start()
    
    
        setInterval(Update, 100)
    
        requestAnimationFrame(FrameUpdate)
    })()
}, 100);

function $(type, data) {
    let resulte;


    const get = (selector) => {
        let element = document.querySelectorAll(selector)

        if(element.length == 1) {
            element = element[0]
        }


        function test() {
            console.log("Nice.")
        }

        return element
    }

    const create = (tag) => {
        const body = get("body")
        
        let element = document.createElement(tag)

        body.appendChild(element)

        return element
    }

    let list = {
        "get": get,
        "create": create
    }

    if(list[type]) {
        resulte = list[type](data)
    }

    return resulte
}