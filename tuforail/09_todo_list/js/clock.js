const clock = document.querySelector('.clock')

function getwatch(){
    const now = new Date()
    const hour = now.getHours()
    const min = now.getMinutes()
    const sec = now.getSeconds()
    
    const hours = hour <10 ? `0${hour}` : `${hour}`
    const mins = min <10 ? `0${min}` : `${min}`
    const seconds = sec <10 ? `0${sec}` : `${sec}`

    clock.innerText = `${hours} : ${mins} : ${seconds}`
}

function init() {
    getwatch()
    setInterval(getwatch,1000)
}

init()