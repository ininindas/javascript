const gnb = document.querySelectorAll('.gnb li')
const url = location.href

// url.indexOf('main')
// console.log(url.indexOf('cat'));

function menuon(i){
    gnb.forEach(item => item.classList.remove('on'))
    gnb[i].classList.add('on')
}

if(url.indexOf('main')>0){
    menuon(0)
}else if (url.indexOf('intro')>0){
    menuon(1)
}else if (url.indexOf('service')>0){
    menuon(2)
}else if (url.indexOf('blog')>0){
    menuon(3)
}