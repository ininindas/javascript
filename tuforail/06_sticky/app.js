const haeder = document.querySelector('.header')

window.addEventListener('scroll',function(){
    haeder.classList.toggle('active',this.window.scrollY > 50)
})