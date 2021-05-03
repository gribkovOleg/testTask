// task 4
localStorage.setItem('test', "user")
window.addEventListener('storage', (e) => {
    if (e.key === null) {
        console.log('local storage cleared...')
        transFunc(callbackFunc)
    } else if (e.newValue) {
        console.log('new data recorded in local storage...')
        transFunc(callbackFunc)
    } else if (e.newValue === null) {
        console.log('key removed from lokal storage...')
        transFunc(callbackFunc)
    }
})
//task 5
function callbackFunc() {
    console.log('callback transmitted!');
}

function transFunc(value) {
    let objCall = {}
    if (typeof value === 'function') {
        objCall.nameFunc = String(value.name)
        objCall.bodyFunc = String(value)
        window.parent.postMessage(objCall, "*")
    }
    return
}