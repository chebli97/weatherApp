var counter = document.getElementById('counter')


function increment() {
    var count = counter.textContent
    count++
    counter.textContent = count
}


function decrement() {
    var count = counter.textContent
        if(count > 0){
            count--
            counter.textContent = count
        }
}

function reset() {
    var count = counter.textContent
        if(count > 0){
            count = 0
            counter.textContent = count
        }
}