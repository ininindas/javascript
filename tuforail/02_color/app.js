const bg = ['orange','lightblue','red','aqua','yellow','lightgreen']
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'f']

const bg_btn = document.querySelector('.bg_btn')
const hex_btn = document.querySelector('.hex_btn')
const colorName = document.querySelector('.color_name')

bg_btn.addEventListener('click',function(){
    const randombgnum = Math.floor(Math.random() * bg.length)
    console.log(randombgnum);
    document.body.style.backgroundColor = bg[randombgnum]
    colorName.textContent = bg[randombgnum]
})