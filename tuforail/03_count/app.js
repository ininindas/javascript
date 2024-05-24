const oneprice = document.querySelector('.price span')
const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const count = document.querySelector('.count')
const totalprice = document.querySelector('.total span')

const unitprice = 15000
let num = 1
count.textContent = num
oneprice.textContent = unitprice.toLocaleString()

plus.addEventListener('click', function(){
    num++
    count.textContent = num
    painttotal()
})

minus.addEventListener('click', function(){
    num--
    if(num < 1) {
        alert('최소 주문 수량은 1개 입니다.')
        num = 1
    }

    count.textContent = num
    painttotal()
})

function painttotal(){
    totalprice.textContent = (num * unitprice).toLocaleString()
}

function init(){
    painttotal()
}

init()