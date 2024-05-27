const items = document.querySelectorAll('.item')

for(let i = 0; i<items.length; i++) {
    items[i].addEventListener('click',function(){
        for(let j =0; j<items.length; j++){
            items[j].classList.remove('.active')
        }
        items[i].classList.add('.active')
    })
}


// for(let i = 0; i<items.length; i++) {
//     items[i].addEventListener('click',function(){
    
//         for(let j =0; j<items.length; j++){
//             items[j].classList.remove('.active')
//         }
//         items[i].classList.add('.active')
//     })
// }