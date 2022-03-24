// inicializando nuestros contadores
let count = 0
let count2 = 0
let value = document.getElementById('contador')

const btnIncrement = document.getElementsByClassName('.increment')
const btnDecrement = document.getElementsByClassName('.decrement')

function increment() {
    value = count++
    document.getElementById('contador').innerHTML = value
    count2=value
}
function decrement() {
    value = count2--
    document.getElementById('contador').innerHTML = value
    count=value
}