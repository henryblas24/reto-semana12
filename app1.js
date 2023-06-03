let menu = document.querySelector('.menu-group')


menu.addEventListener('click',(e) => {
   console.log(e.target.parentElement.classList.toggle('altura'))
})

