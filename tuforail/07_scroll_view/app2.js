const section = document.querySelector('section')

window.addEventListener('scroll',function(){
    // section.style.clipPath = circle(0px at center center)
    const value = window.scrollY
    section.style.clipPath = `circle(${value}px at center center)`

})