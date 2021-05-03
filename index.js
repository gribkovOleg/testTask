// Task 1
document.getElementById('name_input').oninput = ({ target }) => {
    target.value === target.defaultValue ?
        target.classList.remove('red') : target.className = 'red';
}

//Task 2
const url = new URL('http://domain.com/filter?size=M&color=1&color=2&manufacturer=aaa&manufacturer=ddd')

const sizeRadio = document.querySelectorAll('[name="size"]')
const colorCheckbox = document.querySelectorAll('.color')
const manufacturerSelect = document.querySelectorAll('[name="manufacturer"] option')

const sizeParam = url.searchParams.get('size')
const colorParam = url.searchParams.get('color')
const manufacturerParam = url.searchParams.get('manufacturer')

for (let i = 0; i < sizeRadio.length; i++) {
    if (sizeParam === sizeRadio[i].value) {
        sizeRadio[i].checked = true
    }
}

for (let i = 0; i < colorCheckbox.length; i++) {
    if (colorParam === colorCheckbox[i].value) {
        colorCheckbox[i].checked = true
    }
}

for (let i = 0; i < manufacturerSelect.length; i++) {
    if (manufacturerParam === manufacturerSelect[i].value) {
        manufacturerSelect[i].selected = true
    }
}

document.addEventListener('input', ({ target }) => {
    if (!target.matches('form [name]'))
        return

    const dataForm = new FormData(target.form)
    const newUrl = new URLSearchParams(dataForm).toString()
    console.log(newUrl)
});

// // Task 3
const weatherUrl = `http://api.weatherstack.com/current?access_key=8c7a67463e076a13bd14170381fb599a&query=minsk`
const requestUrl = `https://jsonplaceholder.typicode.com/todos/1`

const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', requestUrl)
    xhr.send()
    xhr.responseType = 'json'
    xhr.onload = function () {
        resolve(xhr.response)
    }
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', weatherUrl)
        xhr.send()
        xhr.responseType = 'json'
        xhr.onload = function () {
            resolve(xhr.response)
        }
    }, 3000)
})

Promise.all([promise, promise2]).then((res) => {
    console.log('Оба ответа получены:')
    console.log(res)
})

// task 4
const user = {
    key: 'user',
    name: 'Ivan',
    surname: 'Ivanov',
    age: '22'
}

// setItem
const setData = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}
//get item
const getData = (key) => {
    console.log(JSON.parse(localStorage.getItem(key)))
}
//remove item
const removeData = (key) => {
    localStorage.removeItem(key)
}

setData(user.key, user)

// task 5
let funString;

window.addEventListener("message", function ({data}) {
    funString = data.bodyFunc + data.nameFunc + '()'
    callbackResult()
})

const callbackResult = () => {
    return eval(funString)
}
