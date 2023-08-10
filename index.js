const arr = []
for(let i = 1; i <= 10; i++) {
    arr.push(i)
}

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min
}
let randomNumber = getRandom(1, arr.length)

const div = document.createElement('div')
div.innerHTML = `<img src="./images/${randomNumber}.jpg" alt="Зображення ${randomNumber}.jpg">`
document.body.appendChild(div)
